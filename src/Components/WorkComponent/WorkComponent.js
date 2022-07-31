import React from "react"
import '../WorkComponent/workComponent.css';
import DashboardDesign from '../../Assets/DashboardDesign.png'
import PlayerDesign from '../../Assets/PlayerDesign.png'
import workforce from '../../Assets/workforce.png';
import f1 from '../../Assets/f1.JPG';
import santa from '../../Assets/santa.JPG';
import spotfind from '../../Assets/Spot-find.png';




const WorkComponent = (props) => {
    return (
        <div id="work"  className="workContainer"  >
            <div className="workContainerHeading"  >Work</div>
            <div className="workContainerHeadingUnderline" />


{/* design */}
<div className="workContainerSubHeading"> Design</div>
            <div className="workImageContainer">

<div className="workImageInnerContainer" onClick={  ()=> window.open("https://dribbble.com/shots/18927410-Sport-OTT-Dashboard?utm_source=Clipboard_Shot&utm_campaign=Shetgaonkar&utm_content=Sport%20OTT%20Dashboard&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Shetgaonkar&utm_content=Sport%20OTT%20Dashboard&utm_medium=Social_Share")     }>
<img className="workImage" alt="" src={DashboardDesign}   />
<div className="workHoverInfo" > 

<div className="workHoverInfoHeading">
Studio Dashboard Design
</div>
<div className="workHoverInfoSubHeading">
a mockup of a sport studio analytic Design
</div>

</div>
</div>

<div className="workImageInnerContainer" onClick={  ()=> window.open("https://dribbble.com/shots/18927338-Cricket-Player-Profile?utm_source=Clipboard_Shot&utm_campaign=Shetgaonkar&utm_content=Cricket%20Player%20Profile&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Shetgaonkar&utm_content=Cricket%20Player%20Profile&utm_medium=Social_Share")     }>
<img className="workImage" alt="" src={PlayerDesign}        />
<div className="workHoverInfo"  > 

<div className="workHoverInfoHeading">
Cricket Player Profile Design
</div>
<div className="workHoverInfoSubHeading">
a Player journey profile mockup
</div>


</div>
</div>


<div className="workImageInnerContainer" onClick={  ()=> window.open("https://dribbble.com/shots/14234736-workforce")     }>
<img className="workImage" alt="" src={workforce}        />
<div className="workHoverInfo"  > 

<div className="workHoverInfoHeading">
Work Force
</div>
<div className="workHoverInfoSubHeading">
a work service app
</div>


</div>
</div>





            </div>



{/* CSS */}

            <div className="workContainerSubHeading"> CSS</div>
            <div className="workImageContainer">

<div className="workImageInnerContainer">
<img className="workImage" alt="" src={f1}   />
<div className="workHoverInfo" onClick={  ()=> window.open("https://codepen.io/vshetgaonkar/pen/WNbjOzB")     }> 

<div className="workHoverInfoHeading">
F1 car
</div>
<div className="workHoverInfoSubHeading">
css representation of a formula 1 car
</div>

</div>
</div>

<div className="workImageInnerContainer">
<img className="workImage" alt="" src={santa}        />
<div className="workHoverInfo" onClick={  ()=> window.open("https://codepen.io/vshetgaonkar/pen/poyPXbe")     } > 

<div className="workHoverInfoHeading">
Santa Claus
</div>
<div className="workHoverInfoSubHeading">
a css representation of a santa claus
</div>


</div>
</div>



            </div>





{/* Freelance Projects */}

<div className="workContainerSubHeading">Projects</div>
            <div className="workImageContainer">

<div className="workImageInnerContainer">
<img className="workImage" alt="" src={spotfind}   />
<div className="workHoverInfo" onClick={  ()=> window.open("https://spot-find.herokuapp.com/")     }> 

<div className="workHoverInfoHeading">
Spot-find
</div>
<div className="a music discovery tool">
css representation of a formula 1 car
</div>

</div>
</div>





            </div>











        </div>
    )
}

export default WorkComponent
