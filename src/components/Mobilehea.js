import React from 'react'
import logo from "../images/logo.png";

import { NavLink } from "react-router-dom";

const Mobilehea = () => {
  return (
    <>

<section  id='hide' className='container'>

<nav className="navbar navbar-expand-xl navbar-dark"  >


  <a className="navbar-brand" href="#" id="stico" >
    <img id='logo' src={logo} width={135} height={35} className="d-inline-block align-top" alt="" />
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto" id="headerrnava" >
      <li className="nav-item">
        <NavLink    to="/mainpage"  style={{color:"black"}}   id="aboutaa"  className="nav-link"  >
             Home
        </NavLink>
      </li>
   
      <li className="nav-item" >
        <NavLink to="/scheduleapp" style={{color:"black"}}  id="abouta"  className="nav-link " >   Reception</NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/order" id="/mainpage" style={{color:"black"}}  className="nav-link" href="#services"> Appointment</NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/bookappointment" style={{color:"black"}}  id="abouta2"  className="nav-link " href="#sec4">   Schedule Appointment</NavLink>
      </li>
      <li className="nav-item" >
        <NavLink to="/calender" style={{color:"black"}}  id="abouta3"  className="nav-link " href="#utility">  Calendar</NavLink>
      </li>
       <li className="nav-item">
        <NavLink to="/patient" style={{color:"black"}}  id="abouta4"   className="nav-link con " href="#u">  Patient</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" style={{color:"black"}}  id="abouta4"  className="nav-link con " href="#utility">  Contact Us</NavLink>
      </li> 

      <li className="nav-item">
        <NavLink to="/event" style={{color:"black"}}  id="abouta4"   className="nav-link con " href="#utility">  Events</NavLink>
      </li> 

      
     
    </ul>
    <div id="btnnns">


   
    
    </div>
  </div>


</nav>
      </section>
    </>
  )
}

export default Mobilehea
