import React from 'react'
import './Work.css'

function Work(props) {
    return (
        <div className="Card">
            <img className="im" alt="" src={props.image} />

            <p className="name">{props.Title}</p>
            <p className="content">{props.Content}</p>
        </div>
    )
}

export default Work
