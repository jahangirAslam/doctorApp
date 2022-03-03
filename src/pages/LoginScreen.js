import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import '../MainStyling/login.css'









const LoginScreen = ({isUserFun}) => {


    const [useName , setUseName ] = useState(false);
    const [password , setPassword ] = useState(false);




    const getUserName = (event, user) => {
        const val = [event.target.name] = event.target.value;
      
        setUseName(val)
    
    }
    const getPassword = (event, user) => {
        const val = [event.target.name] = event.target.value;
        setPassword(val)
    }
const login = () =>{
    
    if(useName === "admin" && password === "123456789" )
    
    isUserFun()
}

  
    




    return (

        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <h1>Login</h1>
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input id="email" onChange={getUserName} type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input onChange={getPassword} type="text" className="form-control" placeholder="Password" />
                        </div>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            item xs={12}
                            className="Submitbtn"
                        >
                            <Button onClick={login} >Login</Button>
                        </Grid>                            <div className="message">
                            <div><input type="checkbox" /> Remember ME</div>
                            <div><a href="#">Forgot your password</a></div>
                        </div>
                    </form>
                    <div className="social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoginScreen;