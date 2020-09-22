import React from 'react';
import aroow from './arrow.png'
import './Skil.css'

export default function Skil(props) {
    return (
        <div className="Skil">
             <img src={aroow} alt=""/><div>{props.Skills}</div>
        </div>
    )
}
