import React from 'react'
import './buttons.style.css'

const buttons = [
    "AC","C","%","=","OFF",7,8,9,4,5,6,1,2,3,0,"/","*","-","+","."
]

export const Buttons = ({buttonclick}) => {
    console.log(buttonclick);
    return (
        <div className= "buttons">
            {
                buttons.map((item, i) => 
                <
                button key={i} class="button.numBt"
                onClick = {() => buttonclick(item)}
                >
                    {item}
                </button>

                )
            }
            
        </div>
    )
}