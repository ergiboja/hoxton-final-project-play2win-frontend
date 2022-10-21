import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";





function Main({ countries, setEndpoint, endpoint, matches ,signout, currentuser,setOdds }: any) {
  const navigate = useNavigate()
  
  


  // const Token = '667879c15ce548e5b32ab32d6e4f9610'
  // useEffect(() => {
  //   fetch('https://api.football-data.org/v2/areas', { headers: { 'X-Auth-Token': Token } })
  //     .then((response) => response.json())
  //     .then((data) => 
  //     setCountries(data.areas));

  // }, [])


  return (
    <section className="mainsection">
      <header className="mainheader">
        <div className="navbar">
          <div className="navbarleftside">
            <img src="/resources/mainlogo.png" className="headerlogo" />

          </div>
          <div className="navbarrightside">
            <Link to="/mybets"><a className="balance__button-link">My Bets</a></Link>
            <h3 className="balanceh3">Balance: {localStorage.balance} $</h3>
            <h3 className="balanceh3">{localStorage.username}</h3>

            <img src="/resources/logout.png" className="logoutimg"  onClick={() => {
                signout()
                navigate("/sign_in")
            }} />


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


                <h3 className="leftsech3">Leagues</h3>

              </li>
              {countries.map((area) => (
                <li key={area.key} className="leftsecliareas" onClick={(() => {

                  setEndpoint(area.key)

                })}>


                  <div className="leftsecliimg">

                    {/* <img className="leftsecimg"    src={area.ensignUrl}/> */}
                  </div>

                  <div className="leftsecliname">
                    <h3 className="leftsech3areas">{area.title}</h3>

                  </div>


                </li>
              )


              )}




            </ul>
          </div>



          <ul className="leftul">

          </ul>


        </section>
        <section className="middlesec">
          <div className="middleseccontainer">
            <div className="middcontainerheader"><h3 className="matchresult">Match Result</h3></div>
            
  {matches.map((match) => (
              <div className="matchcontainer" >
                <div className="matchcontainerheader">
                  <div className="matchcontainerheaderleft"><h1 className="matchheader">{match.home_team}</h1></div>
                  <div className="matchcontainerheadermid"><h1 className="matchheader">VS</h1></div>
                  <div className="matchcontainerheaderright">
                    <h1 className="matchheader">{match.away_team}</h1>
                  </div>
                  <div className="matchcontainerheadertime">
                    <h1 className="matchheaderdate">{match.commence_time}</h1>
                  </div>


                </div>
                <div className="matchcontainerodds">
                  <button className="oddbtn" >
                    <div className="oddbtnleft">1</div>
                    <div className="oddbtnright">2.90</div>
    
                  </button>
                  <button className="oddbtn" >
                    <div className="oddbtnleft">x</div>
                    <div className="oddbtnright">2.90</div>
                  </button>
                  <button className="oddbtn" >
                    <div className="oddbtnleft">2</div>
                    <div className="oddbtnright">3.0</div>

                  </button>
                </div>


              </div>
            )

            )}
          



          </div>



        </section>
        <section className="rightsec">

          <div className="betslipcontainer">
            <div className="betslipheader">
              <h2 className="betsliph2">BETSLIP</h2>
              <img className="binicon" src="/resources/bin.png"onClick={()=>{
                                      
                                    
                                      location.reload()
                                 
                                   } } />

            </div>
            <div className="betslipmain">
              <form className="betslipform">
                
              <input type="number" name="ammount" className="betslipform" required placeholder="Bet Ammount:" />
              


              </form>
              <h2 className="betsliptext">Total odd:     </h2>
              <h2 className="betsliptext">Possible Win:     $</h2>


            </div>
            <div className="betslipfooter">
            <a className="balance__button-link">Slip</a>
            <a className="balance__button-link">Place Bet</a>

            </div>
          </div>


        </section>
      </div>
    </section>
  )
}

export default Main