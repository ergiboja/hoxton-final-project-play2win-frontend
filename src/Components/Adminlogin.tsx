import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


function  Adminlogin(){
    const [signInError, setSignInError] = useState("")
    const navigate = useNavigate()
    return(
        <section className="sectioni">
            <div className="container">
                <form id="loginform"   onSubmit={(e) => {
                    e.preventDefault()
                    const body = {
                        //@ts-ignore
                        username: e.target.username.value,
                        //@ts-ignore
                        password: e.target.password.value
                    }
                    fetch(`http://localhost:4001/sign-in`, {
                        method: `POST`,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(body),
                    }).then((resp) => resp.json())
                        .then(data => {
                            if (data.error) {
                                setSignInError(data.error)
                            } else {
                                signIn(data)
                                navigate('/index')
                            }
                        })
                }}>
                    <h1 className="loginh1">Admin Panel</h1>
                    <div className="input-field">
                    <span className="material-symbols-outlined">
admin_panel_settings
</span><input type="Text" id="Name" name="name"
                            required placeholder="Enter an Username:" />
                    </div>
                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" name="password" required placeholder="Enter Your Password:" />
                    </div>
                    <button className="loginbtn" type="submit" value="Submit">Login</button>
                    <p className="error"> </p>
                    <p ></p>
                    
                </form>
            </div>
        </section>
    )
}

export default Adminlogin