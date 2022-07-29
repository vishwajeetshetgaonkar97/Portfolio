import React from 'react';
import './App.css';
import bg from './Assets/dp.jpg';
import Skil from './Components/Skill/Skil';
import Work from './Components/Work/Work';
import github from './Assets/github.png';
import linkedin from './Assets/linkedin.png';
import twitter from './Assets/twitter.png';
import dribble from './Assets/dribbble.png';
import workforce from './Assets/workforce.png';
import rate5 from './Assets/rate5.png';
import f1 from './Assets/f1.JPG';
import santa from './Assets/santa.JPG';
import spotfind from './Assets/Spot-find.png';
import logo from './Assets/logo.png'
import bgImg from './Assets/bgImg.png'
import NavIndicator from './Assets/NavIndicator.png'
import AnimatedCursor from "react-animated-cursor"
import TopDotImage from './Assets/TopDotImage.png'
import RightStraightImage from './Assets/RightStraightImage.png'
import CircleImage from './Assets/CircleImage.png' 
import ShowcasePicture from './Assets/ShowcasePicture.png' 
import aboutShowcaseImage from './Assets/aboutShowcaseImage.png'
import aboutImage from './Assets/aboutImage.png'

function App() {

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

      <div className="Nav">
        <a href="/"><img className="logo" alt="" src={logo} /></a>
        <a href="#work"><div className="Nava">About</div></a>
        <a href="#work"><div className="Navw">Work</div></a>
        <a href="#foot"><div className="Navc">Contact</div></a>
        <button className="Navr">Resume</button>
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





      <div className="About">
      <img className="topAboutInfoHeadingImage" alt="" src={aboutImage} />
      <div className="topAboutInfoHeading" >About Me  <div className="topAboutInfoHeadingLine" /></div>
      <div className="aboutMainContainer">
     <div className="topAboutInfoLeftContainer" >

  
        <div className="AboutTopTest">I'm probably not the typical designer/developer with a definite learning path. I started my academics with a bachelor's degree in electronics and communication engineering but fumbled into UI/UX and fell in love with it. thereafter pursuing it as a career alongside my fondness for programming.
         </div>

        <div className="AboutBottomTest"> For the past 2 yrs, I'm working as a Lead UI/UX & a Front End Developer in a well-renowned product-based startup - <a href="https://github.com/vishwajeetshetgaonkar97" target="_blank" rel="noopener noreferrer" className="AboutBottomTestCompany">SPORTVOT</a>. </div>
        </div>

        <img className="topAboutInfoShowcaseImage" alt="" src={aboutShowcaseImage} />
        </div>
      </div>





      <div id="work" className="Work">
        <div className="w">Work</div>

        <div data-aos="fade-right" className="Bar"></div>
        <div className="N">Designs</div>
        <div className="Wdisplay">
          <a href="https://dribbble.com/shots/14234736-workforce" target="_blank" rel="noopener noreferrer">
            <Work image={workforce} Title="Workforce" Content="a work service app" /></a>
          <a href="https://dribbble.com/shots/14234864-Rate-5" target="_blank" rel="noopener noreferrer">
            <Work image={rate5} Title="Rate5" Content="a faculty rating web tool" /></a>

        </div>
        <div className="N">CSS</div>
        <div className="box">
          <div className="Wdisplay">
            <a href="https://codepen.io/vshetgaonkar/pen/WNbjOzB" target="_blank" rel="noopener noreferrer">
              <Work image={f1} Title="CSS F1 Car" Content=" " /></a>
            <a href="https://codepen.io/vshetgaonkar/pen/poyPXbe" target="_blank" rel="noopener noreferrer">
              <Work image={santa} Title="CSS Santa claus" Content=" " /></a>

          </div></div>

        <div className="N">Project</div>
        <div className="Wdisplay">


          <a href="https://spot-find.herokuapp.com/" target="_blank" rel="noopener noreferrer">

            <Work image={spotfind} Title="Spot-find" Content="a music discovery tool." /></a>




        </div>
      </div>
      <div className="Skills">
        <div className="Lists">
          <div className="s">Skills</div>
          <div className="SBar"></div>
          <div className="Ldis">

            <Skil Skills="React Js" />
            <Skil Skills="CSS" />
            <Skil Skills="HTML" />
            <Skil Skills="Javascript" />
            <Skil Skills="Adobe XD" />
            <Skil Skills="Figma" />
          </div>
        </div>
      </div>
      <div id="foot" className="Footer">
        <div className="w">Get In Touch</div>
        <div className="Bar"></div>

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
        <div className="Iconsm">
          <a href="mailto:vshetgaonkar97@gmailcom" target="_blank" rel="noopener noreferrer"> 
            <div className="Mail">Say Hi <span role="img" aria-label="emoji">👋</span>,at vshetgaonkar97@gmailcom </div>
          </a>
        </div>

        <p><span role="img" aria-label="emoji">👨‍🎨</span> Designed Using Adobe XD</p>
        <p><span role="img" aria-label="emoji">👨‍💻 </span>Build Using ReactJS </p>

      </div>

    </div>
  );
}

export default App;
