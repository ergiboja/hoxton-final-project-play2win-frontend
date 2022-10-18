import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";



function Register({ signIn }: any) {
    const [signOutError, setSignOutError] = useState("")
    const navigate=useNavigate()
    return (
        <section className='registersec'>
            <div className="container">
                <form id='form' className='registerForm' onSubmit={(e) => {
                    e.preventDefault()
                    const body = {
                        //@ts-ignore
                        username: e.target.username.value,
                    
                            //@ts-ignore
                        password: e.target.password.value,
                    
                       
                    }
                    console.log(body)
                    fetch(`http://localhost:4001/sign-up`, {
                        method: `POST`,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    }).then((resp) => resp.json())
                        .then(data => {
                            if (data.error) {
                                setSignOutError(data.error)
                            } else {
                                signIn(data)
                                navigate('/index')
                            }
                        })
                }}>
                    <h1 className="loginh1">Register</h1>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="userame" name="username"
                            required placeholder="Enter an Username:" />
                    </div>




                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" id="password" name="password" minLength={4}
                            required placeholder="Enter Your Password:" />
                    </div>
                   
                    <p>{signOutError}</p>
                    <button type="submit" value="Submit" className="loginbtn" >Register</button>
                  
                    <h2 className="formh2">Are you already a member ? <Link to="/sign_in">Sign In</Link> </h2>
                </form>
            </div>
        </section>
    )
}

export default Register