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

function App() {

  return (
    <div className="App">
       <AnimatedCursor 
       innerSize={7}
      color="255,5,19"
      outerSize={8}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
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
    <img className="backgroundImage" alt="" src={bgImg} />
    <img className="TopDotImage" alt="" src={TopDotImage} />
    <img className="topNavImage" alt="" src={NavIndicator} />
      <div className="Nav">
        <a href="/"><img className="lg" alt="" src={logo} /></a>
        <a href="#work"><div className="Nava">About</div></a>
        <a href="#work"><div className="Navw">Work</div></a>
        <a href="#foot"><div className="Navc">Contact</div></a>
        <button className="Navr">Resume</button>
      </div>

<div className="topShowcaseContent">

</div>

      <div className="About">

        <div className="Name">Vishwajeet</div>
        <div className="Surname">Shetgaonkar</div>
        <div className="Ab">Hi, I'm a UI/UX and a Front End Developer from Goa having good experience in Adobe Xd, React js. I also have a deep understanding of CSS and like to play around with it.
         </div>

        <div className="imgbg"></div>
        <img className="image" alt="" src={bg}></img>

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
