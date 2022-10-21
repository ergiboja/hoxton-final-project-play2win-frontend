import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";





function  Tickets({signout, currentuser,userTicket}: any){
  const navigate = useNavigate()


  


  

    



    return(
        <div className="ticketcontainer">
        <header className="mainheader">
        <div className="navbar">
          <div className="navbarleftside">
            <img src="resources/mainlogo.png" className="headerlogo" />

          </div>
          <div className="navbarrightside">
            <Link to="/index"><a className="balance__button-link">Home</a></Link>
            <h3 className="balanceh3">Balance: {localStorage.balance}  $</h3>
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
            
            {userTicket.map((ticket)=>(  
 <li className="ticketsli" key={ticket.id} >
  <p className="tickettext">{ticket.date}</p>
    <p className="tickettext">{ticket.id}</p>
    <p className="tickettext">{ticket.ammount}$</p>
    <p className="tickettext">x{ticket.odd}</p>
    <p className="tickettext">{ticket.payout}$</p>
    <p className="tickettext">{ticket.status}</p>
    
  </li>  
  ))}
  
          
         

        

          
           
           
         
          
           
           


          </ul>
        </div>

      </section>
      </div>
        
    )
}

export default Tickets