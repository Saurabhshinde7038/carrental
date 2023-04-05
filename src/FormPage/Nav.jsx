import React from "react";
import { Link } from "react-router-dom";
import './index.css'
function Nav(){
    return(
        <nav className='nav'>
    <a className='Netflix_hide' href='https://www.netflix.com/'>N</a>
    <a className='Netflix' href='https://www.netflix.com/'>SpeedyCars</a>
    <Link className='button2' to="./login" >SignIn</Link>
    <Link className='button3' to="./booking" >Book Now</Link>
    <p>BOOK MY CARS & ENJOY OFFERS</p>
  </nav>
    )
}
export default Nav;