import React from "react"
import '../FooterComponent/footer.css';
import logo from '../../Assets/logo.png'
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import twitter from '../../Assets/twitter.png';
import dribble from '../../Assets/dribbble.png';

const Footer = ({downloadImage}) => {
    return (
        <div   id="foot" className="footerContainer"  >
            <div className="footerTopLine"/>
            <img className="footerLogo" alt="" src={logo} />

<div className="footerRouteInfoLine" >

<a href="#about"><div className="FAbout">About</div></a>|
        <a href="#work"><div className="FWork">Work</div></a>|
        <a href="/">  <div className="FResume" onClick={downloadImage}>Resume</div> </a>
</div>

<div className="footerContactInfoLine" >
IND / +91 8668524636 /   <a href="mailto:vshetgaonkar97@gmailcom" target="_blank" rel="noopener noreferrer">  <div >vshetgaonkar123@gmail.com</div> </a>

</div>

<div className="Icons">
          <a href="https://github.com/vishwajeetshetgaonkar97" target="_blank" rel="noopener noreferrer">
            <img className="imgicon" alt="" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/vishwajeet-shetgaonkar-42529618b/" target="_blank" rel="noopener noreferrer">
            <img className="imgicon" alt="" src={linkedin} />
          </a>
          <a href="https://twitter.com/vshetgaonkar97" target="_blank" rel="noopener noreferrer">
            <img className="imgicon" alt="" src={twitter} />
          </a>

          <a href="https://dribbble.com/Shetgaonkar" target="_blank" rel="noopener noreferrer">
            <img className="imgicon" alt="" src={dribble} />
          </a>
        </div>
<div className="footerBottomCopyright" >
Copyright © 2022 Vishwajeet Shetgaonkar | All rights reserved
</div>
        </div>
    )
}

export default Footer
