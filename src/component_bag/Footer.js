import React, { Component } from 'react';
import styles  from "../css/member/homepage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { WEBSITE_ADDRESS } from '../contants/uiConstants';
import LogoContainer from './logoContainer';
import almamaterLogo from '../resources/images/logo.png'

class Footer extends Component {
    render() {
        return (
            <div id={styles["footer-section"]} >
            <div id={styles["footer-upper-section"]}>
              <div id={[styles["footer-left"]]}>
                <ul>
                  <li><a href="#">Check Offers</a></li>
                  <li><a href="#">Member Universities</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Become a member</a></li>
                  <li><a href="#">Why Us</a></li>
                </ul>
                <ul>
                  <li><a href="#">Privacy Policies</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">License</a></li>
                  <li><a href="#">Legal proceedings</a></li>
                  <li><a href="#">Domain</a></li>
                </ul>
                <ul>
                  <li><a href="#">About Casantey</a></li>
                  <li><a href="#">Our website</a></li>
                  <li><a href="#">Other Products</a></li>
                  <li><a href="#">Prevelages</a></li>
                  <li><a href="#">More</a></li>
                </ul>
                
              </div>
              <div id={[styles["footer-right"]]}>
                <h2 style={{fontFamily:"lobster"}}>Connect with us</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faPhone}/> &#160; {WEBSITE_ADDRESS.contact}</li>
                    <li><FontAwesomeIcon icon={faEnvelope}/>&#160; &#160;{WEBSITE_ADDRESS.email}</li>
                </ul>
              </div>
            </div>
            <div id={styles["footer-lower-section"]}>
              <LogoContainer  
                outerStyles={{width:60}} 
                textStyles={{margin:"0px",marginRight:"30px"}} imageSrc={almamaterLogo}/>
              <div id={styles["copyright-container"]}>
                <span
                  style={{
                    fontFamily:"Helvetica Neue", 
                    fontStyle:"normal", fontWeight:"300",
                     color:"#",
                  }} 
                >{WEBSITE_ADDRESS.name}</span>
                <span
                   style={{
                    fontFamily:"Helvetica Neue", 
                    fontStyle:"normal", fontWeight:"300",
                   color:"#",  margin:"0px",marginLeft:"10%",
                  }} 
                >Copyright @ {WEBSITE_ADDRESS.year}</span>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;