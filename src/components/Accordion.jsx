import { useState } from 'react'
import React from 'react'
import { Data } from './Data'
import "../utils/CSS/accor.css"


const Accordion = () => {

    //to select and deselect
    const [selected, setSelected] = useState(null) 

    const toggle = i =>{
        // if selected question is already active, then close it 
        if (selected === i){
            return setSelected(null)

        } 
        setSelected(i)
    }

    // accordion 
    return (
        <div className="contePrincipal">

            <div className="wrapper">
                <div className="accordion">
                    {Data.map((item,i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle (i)}>
                                <h1>{item.question}</h1>
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                                <h2>{item.answer}</h2>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    )
}

export default Accordion

