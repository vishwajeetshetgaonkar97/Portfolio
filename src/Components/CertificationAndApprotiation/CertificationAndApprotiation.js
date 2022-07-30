import React from "react"
import '../CertificationAndApprotiation/CertificationAndApprotiation.css';
import UXCertificate from '../../Assets/UXCertificate.jpg'
import ReactCertificate from '../../Assets/ReactCertificate.jpg'
import SVAppritiation from '../../Assets/SVAppritiation.png'


const CertificationAndApprotiation = (props) => {
    return (
        <div  className="certificateContainer"  >
            <div className="certificateContainerHeading"  >Certification & Appriation</div>
            <div className="certificateContainerHeadingUnderline" />

            <div className="certificateImageContainer">

<div className="certificateImageInnerContainer">
<img className="certificateImage" alt="" src={UXCertificate}   />
<div className="certificateHoverInfo" onClick={  ()=> window.open("https://www.udemy.com/certificate/UC-fb8fe878-dd9b-43c5-ac33-e31f380703be/")     }> 

<div className="certificateHoverInfoHeading">
User Experience Design Essentials - Adobe XD UI UX Design
</div>
<div className="certificateHoverInfoSubHeading">
Udemy
</div>

</div>
</div>

<div className="certificateImageInnerContainer">
<img className="certificateImage" alt="" src={ReactCertificate}        />
<div className="certificateHoverInfo" onClick={  ()=> window.open("https://www.udemy.com/certificate/UC-87b57174-d098-4b84-886a-c6378fd9c2b2/")     } > 

<div className="certificateHoverInfoHeading">
React - The Complete Guide (incl Hooks, React Router, Redux)
</div>
<div className="certificateHoverInfoSubHeading">
Udemy
</div>


</div>
</div>

<div className="certificateImageInnerContainer">
<img className="certificateImage" alt="" src={SVAppritiation} />
<div className="certificateHoverInfo" onClick={  ()=> window.open("https://www.linkedin.com/posts/vishwajeet-shetgaonkar-42529618b_teamsportvot-activity-6885616379064549376-_rX7?utm_source=linkedin_share&utm_medium=member_desktop_web")     } > 

<div className="certificateHoverInfoHeading">
Linkedin Shoutout
</div>
<div className="certificateHoverInfoSubHeading">
Sportvot
</div>

</div>
</div>


            </div>
        </div>
    )
}

export default CertificationAndApprotiation
