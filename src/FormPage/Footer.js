import React from "react";
import { Link } from "react-router-dom";
import './index.css';

function Footer(){
    return(
        <>
        <div className="footer_div">
            <h1>Enjoy Your Journey....</h1>
            <p>“Remember that happiness is a way of travel, not a destination.”<br/>
            The world is a book and those who do not travel read only one page
            </p>
          
           <Link to="./booking">BOOK NOW</Link>
        </div>
        <div className="footer_div1">
            <div className="ancher"><a href="https://help.netflix.com/contactus">Questions? Contact us.</a></div>
            <div className="footer_flex">
            <div>
                <a href="">FAQ</a>
                <a href="">Investor Relations</a>
                <a href="">Privacy</a>
                <a href="">Speed Test</a>
            </div>
            <div>
                <a href="">Help Centre</a>
                <a href="">Jobs</a>
                <a href="">Cookie Preferences</a>
                <a href="">Legal Notices</a>
            </div>
            <div>
                <a href="">Account</a>
                <a href="">Ways to Connect</a>
                <a href="">Corporate Information</a>
                <a href="">Only on SpeedyCars</a>
            </div>
            <div>
                <a href="">Media Centre</a>
                <a href="">Terms of Use</a>
                <a href="">Contact Us</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default Footer;