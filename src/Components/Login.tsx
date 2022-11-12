import React, { useState } from "react";
import {Alert} from "react-bootstrap";
import Home from "./Home";

function Login(){


    const[emaillog ,setEmaillog] = useState("");
    const[passwordlog,setPasswordlog] = useState("");
    const[flag,setFlag] = useState(false);
    const[home,setHome] = useState(true);


    function handleLogin(e:any){
        e.preventDefault();
        let mail = localStorage.getItem("Email")?.replace(/"/g,"");
        let pass =localStorage.getItem("Password")?.replace(/"/g,"");

        if(!emaillog || !passwordlog) {
            setFlag(true);
            console.log("Empty");

        }else if(passwordlog !== pass || emaillog !== mail){
            setFlag(true)

        }else {
            setHome(!home);
            setFlag(false);
        }
    }
    return(
        <div className="ser_card">
            {home ? (
            <form onSubmit={handleLogin} >
                <h3>Login</h3>
            <div className="form-group">
                    <label>Email :</label>
                    <input type='text' className="form-control mt-2" placeholder="Enter full email" onChange={(event)=> setEmaillog(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password :</label>
                    <input type='password' className="form-control mt-2" placeholder="Enter full password" onChange={(event)=> setPasswordlog(event.target.value)}/>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Login</button>
                
                {
                    flag && (
                        <Alert color="primary" variant="danger">
                            Please fill Correct Info
                        </Alert>
                    )
                }
            </form>
            ):(
<Home />
                )}
        </div>
    )
}

export default Login;