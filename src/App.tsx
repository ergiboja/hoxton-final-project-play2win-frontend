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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
      <Route path="/sign_in" element={<Login/>} />
      <Route path="/sign_up" element={<Register/>} />
      <Route path="/index" element={<Main/>} />
      <Route path="/admin" element={<Adminlogin/>} />
      
      </Routes>
    </div>
  )
}

export default App
