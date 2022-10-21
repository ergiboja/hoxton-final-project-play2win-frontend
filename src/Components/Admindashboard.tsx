import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Admindashboard() {
    const [tickets, setTickets] = useState([])
    const[ticketid,setTicketid]=useState(0)
    
    const navigate = useNavigate()


    
  
    useEffect(() => {
        fetch('http://localhost:4001/tickets')
            .then((response) => response.json())
            .then((data) =>
                setTickets(data));

    }, [])
    useEffect(() => {
        fetch(`http://localhost:4001/ticket/${ticketid}` ,{
      method: 'DELETE',
    })
    .then(res => res.json()) // or res.json()
    .then(res => console.log(res))
    }, [ticketid])
    return (
        <section className="mainsection">
            <header className="mainheader">
                <div className="navbar">
                    <div className="navbarleftside">
                        <img src="/resources/mainlogo.png" className="headerlogo" />

                    </div>
                    <div className="navbarrightside">
                        <Link to="/index"><a className="balance__button-link">Main Page</a></Link>

                        <h3 className="balanceh3">Ergi001</h3>

                        <img src="/resources/logout.png" className="logoutimg" />


                    </div>
                </div>
                <div className='rednavbaradmin'>




                </div>

            </header>
            <section className="adminmain">
                <div className="adminleft">
                    <ul className="adminleftul">
                        <li className="adminleftli">
                            <Link to="/admin/users">   <h1 className="adminh1">Users</h1></Link>
                        </li>
                        <li className="adminleftli">
                            <Link to="/admin/index"> <h1 className="adminh1">Tickets</h1></Link>
                        </li>
                       





                    </ul>


                </div>
                <div className="adminmidd">
                    <div className="ticketcontainer">
                        <ul className="ticketul">
                            <li className="ticketsliadmin">
                                <p className="ticketp">Date</p>
                                <p className="ticketp">Ticket id</p>
                                <p className="ticketp">Ammount</p>
                                <p className="ticketp">Odd</p>
                                <p className="ticketp">Payout</p>
                                <p className="ticketp">Status</p>
                                <p className="ticketp">Delete</p>



                            </li>
                            {tickets.map((ticket) => (
                                <li className="ticketsliadmin" key={ticket.id}>
                                    <p className="tickettext">{ticket.date}</p>
                                    <p className="tickettext">{ticket.id}</p>
                                    <p className="tickettext">{ticket.ammount}</p>
                                    <p className="tickettext">{ticket.odd}</p>
                                    <p className="tickettext">{Number(ticket.payout)}</p>
                                    <p className="tickettext">{ticket.status}</p>
                                    <div className="bindiv">
                                        <img className="binicon" src="/resources/bin.png" onClick={()=>{
                                      
                                      setTicketid(ticket.id)
                                      location.reload()
                                 
                                   } }/>
                                    </div>

                                </li>



                            ))}


                        </ul>


                    </div>
                </div>

            </section>
        </section>
    )
}

export default Admindashboard