import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

type Prop={
    signIn:(data:object)=>void
}

function Login({ signIn }: Prop) {
    const [signInError, setSignInError] = useState("")
    const navigate = useNavigate()
    return (
        <section className="sectioni">
            <div className="container">
                <form id="loginform" onSubmit={(e) => {
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
                    <h1 className="loginh1">Login</h1>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="username" name="username"
                            required placeholder="Enter an Username:" />
                    </div>
                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" name="password" required placeholder="Enter Your Password:" />
                    </div>
                    <button className="loginbtn" type="submit" value="Submit">Login</button>
                    <p className="error"> {signInError} </p>
                    <p ></p>
                    <h2 className="formh2">Don't have an account ? <Link to="/sign_up">SignUp Now</Link> </h2>
                </form>
            </div>
        </section>
    )
}

export default Login
