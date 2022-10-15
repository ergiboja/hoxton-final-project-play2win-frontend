import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";





function  Tickets(){
    



    return(
        <div className="ticketcontainer">
        <header className="mainheader">
        <div className="navbar">
          <div className="navbarleftside">
            <img src="resources/mainlogo.png" className="headerlogo" />

          </div>
          <div className="navbarrightside">
            <Link to="/index"><a className="balance__button-link">Home</a></Link>
            <h3 className="balanceh3">Balance:  20 $</h3>
            <h3 className="balanceh3">Ergi001</h3>

            <img src="resources/logout.png" className="logoutimg" />


          </div>
        </div>
        <div className='rednavbar'></div>

      </header>
      <section className="ticketmain">
        

      </section>
      </div>
        
    )
}

export default Tickets