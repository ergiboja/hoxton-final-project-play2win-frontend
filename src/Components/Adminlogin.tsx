import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";


function  Adminlogin(){
    return(
        <section className="sectioni">
            <div className="container">
                <form id="loginform">
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