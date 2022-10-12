import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";





function Main() {
  const [countries, setCountries] = useState([])



  const Token = '667879c15ce548e5b32ab32d6e4f9610'
  useEffect(() => {
    fetch('https://api.football-data.org/v2/areas', { headers: { 'X-Auth-Token': Token } })
      .then((response) => response.json())
      .then((data) => 
      setCountries(data));

  }, [])
  console.log(countries)
  return (
    <section className="mainsection">
      <header className="mainheader">
        <div className="navbar">
          <div className="navbarleftside">
            <img src="resources/mainlogo.png" className="headerlogo" />

          </div>
          <div className="navbarrightside">
            <Link to="/sign_up"><a className="balance__button-link">My Bets</a></Link>
            <h3 className="balanceh3">Balance:  20 $</h3>
            <h3 className="balanceh3">Ergi001</h3>

            <img src="resources/logout.png" className="logoutimg" />


          </div>
        </div>
        <div className='rednavbar'></div>

      </header>
      <div className="mainmain">
        <section className="leftsec">
          <div className="leftseccolumn">
            <ul className="leftsecul">
              <li className="leftsecli">
                <img className="leftsecimg" src="" />
                <h3 className="leftsech3">Football</h3>

              </li>
              {countries.areas.map((area)=>  (
                    <li className="leftsecliareas">
                    <img className="leftsecimg"    src={area.ensignUrl}/>
                    <h3 className="leftsech3areas">{area.name}</h3>
    
                  </li>
              )
              
              
              )}




            </ul>
          </div>



          <ul className="leftul">

          </ul>


        </section>
        <section className="middlesec">








        </section>
        <section className="rightsec">




        </section>
      </div>
    </section>
  )
}

export default Main