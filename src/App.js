import React, {  useState } from 'react';
import './App.css';
import github from './Assets/github.png';
import linkedin from './Assets/linkedin.png';
import twitter from './Assets/twitter.png';
import dribble from './Assets/dribbble.png';
import logo from './Assets/logo.png'
import NavIndicator from './Assets/NavIndicator.png'
import AnimatedCursor from "react-animated-cursor"
import TopDotImage from './Assets/TopDotImage.png'
import RightStraightImage from './Assets/RightStraightImage.png'
import CircleImage from './Assets/CircleImage.png' 
import ShowcasePicture from './Assets/ShowcasePicture.png' 
import aboutShowcaseImage from './Assets/aboutShowcaseImage.png'
import aboutImage from './Assets/aboutImage.png'
import SkillsComponent from './Components/SkillsComponent/SkillsComponent';
import CertificationAndApprotiation from './Components/CertificationAndApprotiation/CertificationAndApprotiation';
import Footer from './Components/FooterComponent/Footer';
import WorkComponent from './Components/WorkComponent/WorkComponent';
import Menu from './Assets/menu.png'
import resume from '../src/Assets/Resume.pdf'
import { saveAs } from 'file-saver'

function App() {

  const downloadImage = () => {
    console.log("ingooo")
    saveAs(resume, 'Vishwajeet Shetgaonkar Resume.pdf') 
   handleDrawerClose()
  }

  const [showDrawer, setShowDrawer] = useState(false);

const handleDrawerOpen = ()=>{
setShowDrawer(true)

}
const handleDrawerClose = ()=>{
  setShowDrawer(false)
  
  }
console.log("show",showDrawer)
  return (
    <div className="App">
       <AnimatedCursor 
       innerSize={7}
      color="255,5,19"
      outerSize={8}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={7}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}/>
    <div className="backgroundImage"  />
    <img className="TopDotImage" alt="" src={TopDotImage} />
    <img className="RightStraightImage" alt="" src={RightStraightImage} />
    <img className="CircleImage" alt="" src={CircleImage} />
    <img className="topNavImage" alt="" src={NavIndicator} />
    <img className="showcaseImage" alt="" src={ShowcasePicture}/>

<img  className="MenuImage" alt=""    src={Menu}  onClick={handleDrawerOpen}/>



<a href="/"><img className="logo" alt="" src={logo} /></a>

      <div className={`Nav  ${showDrawer? "NavDisplay":""}`} onClick={handleDrawerClose} >
        
        <a href="#about"  onClick={handleDrawerClose}  ><div className="Nava">About</div></a>
        <a href="#work" onClick={handleDrawerClose}><div className="Navw">Work</div></a>
        <a href="#foot" onClick={handleDrawerClose}><div className="Navc">Contact</div></a>
        <button className="Navr" onClick={downloadImage}>Resume</button>
      </div>

      <div className="topShowcaseContent">
         <div className="topInfo">Hello, I am</div>
         <div className="Name">Vishwajeet</div>
         <div className="Surname">Shetgaonkar</div>
         <div className="bottomInfo">A young <span>UI/UX</span> and a <span>Front End Developer
            </span> with the craze to Seek More.
          </div>

          <div className="topSocialMediaComponent">
            <div className="topSocialMediaInfo" >Find Me on</div>
            <div className="topSocialMediaIconsContainer" >

            <a href="https://github.com/vishwajeetshetgaonkar97" target="_blank" rel="noopener noreferrer">
               <img className="topSocialImageIcon" alt="" src={github} />
             </a>
             <a href="https://www.linkedin.com/in/vishwajeet-shetgaonkar-42529618b/" target="_blank" rel="noopener noreferrer">
              <img className="topSocialImageIcon" alt="" src={linkedin} />
             </a>
             <a href="https://twitter.com/vshetgaonkar97" target="_blank" rel="noopener noreferrer">
                <img className="topSocialImageIcon" alt="" src={twitter} />
             </a>

             <a href="https://dribbble.com/Shetgaonkar" target="_blank" rel="noopener noreferrer">
                <img className="topSocialImageIcon" alt="" src={dribble} />
            </a>
            </div>
          </div>

        </div>





      <div className="About" id="about">
      <img className="topAboutInfoHeadingImage" alt="" src={aboutImage} />
      <div  className="topAboutInfoHeading" >About Me  <div className="topAboutInfoHeadingLine" /></div>
      <div className="aboutMainContainer">
     <div className="topAboutInfoLeftContainer" >

  
        <div className="AboutTopTest">I'm probably not the typical designer/developer with a definite learning path. I started my academics with a bachelor's degree in electronics and communication engineering but fumbled into UI/UX and fell in love with it. thereafter pursuing it as a career alongside my fondness for programming.
         </div>

        <div className="AboutBottomTest"> For the past 2 yrs, I'm working as a Lead UI/UX & a Front End Developer in a well-renowned product-based startup - <a href="https://sportvot.com/" target="_blank" rel="noopener noreferrer" className="AboutBottomTestCompany">SPORTVOT</a>. </div>
        </div>

        <img className="topAboutInfoShowcaseImage" alt="" src={aboutShowcaseImage} />
        </div>
      </div>

<WorkComponent/>

<SkillsComponent/>

<CertificationAndApprotiation/>

<Footer downloadImage={downloadImage}/>


    
     

    </div>
  );
}

export default App;
