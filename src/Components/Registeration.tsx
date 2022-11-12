import React, { useState } from "react";
import {Alert} from "react-bootstrap";
import Login from "./Login";


function Registeration(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [flag,setFlag] = useState(false);
    const [login,setLogin] = useState(true);

    function handleSubmit(e:any){
        e.preventDefault();
        if(!name || !email || !password || !phone){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Email",JSON.stringify(email));
            localStorage.setItem("Password",JSON.stringify(password));

            console.log("Saved In LOCAL Storage");
            setLogin(!login);
        }
    }
    function handleClick(){
        setLogin(!login);
    }
    return(
        <div >

{login ? (
            <form onSubmit={handleSubmit} >
                <h1>Register</h1>
                <div className="form-group">
                    <label>Name :</label>
                    <input type='text' className="form-control mt-2" placeholder="Enter full name"  onChange={(event)=> setName(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Email :</label>
                    <input type='text' className="form-control mt-2" placeholder="Enter full email" onChange={(event)=> setEmail(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password :</label>
                    <input type='password' className="form-control mt-2" placeholder="Enter full password" onChange={(event)=> setPassword(event.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Phone :</label>
                    <input type='number' className="form-control mt-2" placeholder="Enter full phone" onChange={(event)=> setPhone(event.target.value)}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block mt-2">Register</button>

                <a onClick={handleClick}>Alreay registered {" "} - login in ?</a>

                {
                    flag && (
                        <Alert color="primary" variant="danger">
                            Please fill Every field
                        </Alert>
                    )
                }
            </form>

):( 

    <Login />
            
        )}
        </div>
    )
}

export default Registeration;