import React from "react"
import '../SkillsComponent/skillComponent.css';
import AdobeXD from '../../Assets/AdobeXD.png'
import ReactJs from '../../Assets/ReactJs.png'
import reactNative from '../../Assets/react-native.png'
import CSS from '../../Assets/CSS.png'
import MATERIALUI from '../../Assets/MATERIALUI.png'
import Figma from '../../Assets/Figma.png'

const SkillsComponent = (props) => {
    return (
        <div  className="skillsContainer"  >
            <div className="skillsContainerHeading"  >My Skills</div>
            <div className="skillsContainerHeadingUnderline" />

            <div className="skillsImageContainer">

<div className="skillsImageInnerContainer">
<img className="SkillImage" alt="" src={AdobeXD} />
<div className="SkillImageHeading" >Adobe Xd</div>
</div>

<div className="skillsImageInnerContainer">
<img className="SkillImage" alt="" src={ReactJs} />
<div className="SkillImageHeading" >React Js</div>
</div>

<div className="skillsImageInnerContainer">
<img className="SkillImage" alt="" src={reactNative} />
<div className="SkillImageHeading" >react Native</div>
</div>

<div className="skillsImageInnerContainer">
<img className="SkillImage" alt="" src={CSS} />
<div className="SkillImageHeading" >CSS</div>
</div>

<div className="skillsImageInnerContainer">
<img className="SkillImage" alt="" src={MATERIALUI} />
<div className="SkillImageHeading" >Material-Ui</div>
</div>

<div className="skillsImageInnerContainer">
<img className="SkillImage" alt="" src={Figma} />
<div className="SkillImageHeading" >Figma</div>
</div>



            </div>
        </div>
    )
}

export default SkillsComponent
