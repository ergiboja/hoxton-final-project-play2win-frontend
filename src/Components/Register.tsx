import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";



function Register() {
    return (
        <section className='registersec'>
            <div className="container">
                <form id='form' className='registerForm'>
                    <h1 className="loginh1">Register</h1>
                    <div className="input-field">
                        <span className="material-symbols-outlined">
                            person
                        </span><input type="Text" id="Name" name="name"
                            required placeholder="Enter an Username:" />
                    </div>




                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" id="password" name="password" minLength={4}
                            required placeholder="Enter Your Password:" />
                    </div>
                    <div className="input-field">
                        <i className="uil uil-lock icon"></i><input type="password" id="password" name="password" minLength={4}
                            required placeholder="Confirm Your Password:" />
                    </div>
                    <p></p>
                    <button type="submit" value="Submit" className="loginbtn" >Register</button>
                    <p></p>
                    <h2 className="formh2">Are you already a member ? <Link to="/sign_in">Sign In</Link> </h2>
                </form>
            </div>
        </section>
    )
}

export default Register