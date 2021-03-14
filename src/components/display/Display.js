import React from 'react'
import './display.style.css';

export const Display = ({txtDisplay, total}) => {
    return (
        <div className= "input">
             {total || txtDisplay || ".0" }
            
        </div>
    )
}

