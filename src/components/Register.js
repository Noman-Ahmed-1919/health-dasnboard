import React from "react";
import logo from "../images/logo.png"



const Register = ({setIsLogin}) =>{
    return(
        <>
        

        <img src={logo} className="loginlogo" style={{textAlign:"center"}}/>


<div className="mainlogininput" style={{marginTop:"80px"}}>

<div >
<input type="text" className="logininp"  placeholder="Please Enter Your Name "/>

</div>


<div style={{marginTop:"25px"}}>
<input type="text"  className="logininp"   placeholder="Please Enter Your Email Address "/>

</div>


<div style={{marginTop:"25px"}}>
<input type="text"  className="logininp"   placeholder="Please Enter Your Password "/>

</div>


<div style={{marginTop:"25px"}}>
<input type="text"  className="logininp"   placeholder="Please Re-Enter Password "/>

</div>


<div style={{textAlign:"center"}}>
<button className="loginbtn">Register</button>

</div>

</div>






        
        </>
    )
}

export default Register;