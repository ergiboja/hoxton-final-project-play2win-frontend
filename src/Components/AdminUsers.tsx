import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function AdminUsers(){

    const[users,setUsers]=useState([])
    useEffect(() => {
        fetch('http://localhost:4001/users')
          .then((response) => response.json())
          .then((data) =>
            setUsers(data));
    
      }, [])





    return(
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
                        <li className="adminleftli">
                        <Link to="/admin/deposit">   <h1 className="adminh1">Deposit</h1></Link>
                        </li>





                    </ul>


                </div>
                <div className="adminmidd">
                <div className="ticketcontainer">
                        <ul className="ticketul">
                            <li className="ticketsliadmin">
                                <p className="ticketp">User id</p>
                                <p className="ticketp"></p>
                                <p className="ticketp">Username</p>
                                <p className="ticketp"></p>
                                <p className="ticketp">Balance</p>
                                <p className="ticketp"></p>
                                <p className="ticketp">Delete</p>



                            </li>
                            {users.map((user)=>
                                (
                                    <li className="ticketsliadmin" key={user.id}>
                                    <p className="tickettext">{user.id}</p>
                                    <p className="tickettext"></p>
                                    <p className="tickettext">{user.username}</p>
                                    <p className="tickettext"></p>
                                    <p className="tickettext">{user.balance}$</p>
                                    <p className="tickettext"></p>
                                    <div className="bindiv">
                                        <img className="binicon" src="/resources/bin.png" />
                                    </div>
    
                                </li>

                                )
                            )}
                          
                            </ul>
                            </div>





                </div>
                </section>
                </section>
    )
}

export default AdminUsers