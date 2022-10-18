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
  const apiLink = 'https://api.the-odds-api.com/v4/sports/' + endpoint + '/odds/?regions=eu&oddsFormat=decimal&markets=h2h&apiKey=7068f150cf1326653cdee3c93974a561'
  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch('https://api.the-odds-api.com/v4/sports/?apiKey=7068f150cf1326653cdee3c93974a561')
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setCountries(data));

  // }, [])


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
            console.log(data.user)
          }
        })
    }
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/sign_in" element={<Login  signIn={signIn}/>} />
        <Route path="/sign_up" element={<Register signIn={signIn}/>} />
        <Route path="/index" element={<Main endpoint={endpoint} countries={countries} matches={matches} setEndpoint={setEndpoint} signout={signout} currentuser={currentuser} />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/admin/index" element={<Admindashboard />} />
        <Route path="/mybets" element={<Tickets />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/deposit' element={<Admindeposit />} />


      </Routes>
    </div>
  )
}

export default App
