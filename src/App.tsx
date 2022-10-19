import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate, Navigate, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Admindashboard from './Components/Admindashboard'
import Adminlogin from './Components/Adminlogin'
import Main from './Components/Main'
import Tickets from './Components/Tickets'
import AdminUsers from './Components/AdminUsers'
import Admindeposit from './Components/Admindeposit'

function App() {
  const [currentuser, setCurrentuser] = useState(null)
  const [countries, setCountries] = useState([])
  const [endpoint, setEndpoint] = useState("soccer_germany_bundesliga")
  const [matches, setMatches] = useState([])
  const apiLink = 'https://api.the-odds-api.com/v4/sports/' + endpoint + '/odds/?regions=eu&oddsFormat=decimal&markets=h2h&apiKey=e46e2e21d295ec100e7007f515d514c4'
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('https://api.the-odds-api.com/v4/sports/?apiKey=e46e2e21d295ec100e7007f515d514c4')
      .then((response) => response.json())
      .then((data) =>
     
        setCountries(data));

  }, [])
 


  useEffect(() => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) =>
        setMatches(data));

  }, [endpoint])
  console.log(endpoint)



  function signIn(data: any) {
    setCurrentuser(data.user)
    localStorage.token = data.token
  }
  console.log(currentuser)

  function signout(data: any) {
    setCurrentuser(null)
    localStorage.clear()
    navigate("/sign_in")
    
  }
  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:4001/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            signIn(data)
          
          }
        })
    }
  }, [])
  //@ts-ignore
  if(currentuser) {
  
    localStorage.setItem('username', (currentuser.username));
    localStorage.setItem('balance', (currentuser.balance));
    localStorage.setItem('id', (currentuser.id));
  }

 
    
 
 


  return (
    <div className="App">
      <Routes>
        <Route path="/sign_in" element={<Login  signIn={signIn}/>} />
        <Route path="/sign_up" element={<Register signIn={signIn}/>} />
        <Route path="/index" element={<Main endpoint={endpoint} countries={countries} matches={matches} setEndpoint={setEndpoint} signout={signout} currentuser={currentuser} />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/admin/index" element={<Admindashboard />} />
        <Route path="/mybets" element={<Tickets signout={signout} currentuser={currentuser} />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/deposit' element={<Admindeposit />} />


      </Routes>
    </div>
  )
}

export default App
