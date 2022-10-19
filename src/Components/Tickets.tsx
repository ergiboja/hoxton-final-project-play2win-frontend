import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";





function  Tickets({signout, currentuser}){
  const navigate =useNavigate()
  const[userid, setUserid]=useState('')
  const[user,setUser]=useState()
 

  setUserid(localStorage.id)


  useEffect(() => {
    fetch('http://localhost:4001/user/4' )
        .then((response) => response.json())
        .then((data) =>
       
            setUser(data));

}, [])

 
    



    return(
        <div className="ticketcontainer">
        <header className="mainheader">
        <div className="navbar">
          <div className="navbarleftside">
            <img src="resources/mainlogo.png" className="headerlogo" />

          </div>
          <div className="navbarrightside">
            <Link to="/index"><a className="balance__button-link">Home</a></Link>
            <h3 className="balanceh3">Balance:  {localStorage.balance} $</h3>
            <h3 className="balanceh3">{localStorage.username}</h3>

            <img src="resources/logout.png" className="logoutimg" onClick={() => {
                signout()
                navigate("/sign_in")
            }} />



          </div>
        </div>
        <div className='rednavbar'></div>

      </header>
      <section className="ticketmain">
        <div className="ticketmainheader">
          <h1 className="ticketh1">My Bets</h1>
        </div>
        <div className="ticketcontainer">
          <ul className="ticketul">
            <li className="ticketli">
              <p className="ticketp">Date</p>
              <p className="ticketp">Ticket id</p>
              <p className="ticketp">Ammount</p>
              <p className="ticketp">Odd</p>
              <p className="ticketp">Payout</p>
              <p className="ticketp">Status</p>


              
            </li>
            
            {/* {user.ticket.map((ticket)=>(  ))} */}
  <li className="ticketsli" >
  <p className="tickettext">22-08-29</p>
    <p className="tickettext">22</p>
    <p className="tickettext">300$</p>
    <p className="tickettext">X31</p>
    <p className="tickettext">6000$</p>
    <p className="tickettext">Pending</p>
    
  </li>  
 
          
         

        

          
           
           
         
          
           
           


          </ul>
        </div>

      </section>
      </div>
        
    )
}

export default Tickets