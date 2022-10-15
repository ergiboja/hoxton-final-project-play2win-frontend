import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import Admindashboard from './Components/Admindashboard'
import Adminlogin from './Components/Adminlogin'
import Main from './Components/Main'
import Tickets from './Components/Tickets'

function App() {
  const [countries, setCountries] = useState([])
  const [endpoint, setEndpoint] = useState("soccer_germany_bundesliga")
  const [matches, setMatches]=useState([])
  const apiLink='https://api.the-odds-api.com/v4/sports/'+ endpoint + '/odds/?regions=eu&oddsFormat=decimal&markets=h2h&apiKey=7068f150cf1326653cdee3c93974a561'

  useEffect(() => {
    fetch('https://api.the-odds-api.com/v4/sports/?apiKey=7068f150cf1326653cdee3c93974a561')
      .then((response) => response.json())
      .then((data) =>
        setCountries(data));

  }, [])


  useEffect(() => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) =>
        setMatches(data));

  },[endpoint])
console.log(endpoint)


  return (
    <div className="App">
      <Routes>
        <Route path="/sign_in" element={<Login />} />
        <Route path="/sign_up" element={<Register />} />
        <Route path="/index" element={<Main endpoint={endpoint}  countries={countries}  matches={matches}  setEndpoint={setEndpoint}/>} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/mybets" element={<Tickets  />} />
     

      </Routes>
    </div>
  )
}

export default App
