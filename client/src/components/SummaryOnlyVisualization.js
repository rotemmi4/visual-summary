import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function SummaryOnlyVisualization(props){

    const sentences = props.sentences
    const [threshold , setThreshold] = useState(0.5)
    const showBar = props.showBar

    let rangeBar = null

    if(showBar){
        rangeBar = <Form.Control type="range" onChange={(e)=>{setThreshold(e.target.value / 100 )}}/>
    }

    return (
        <>
            {rangeBar}
            <p>Threshold: {threshold}</p>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span>{sentence.content}</span> : null
            ))}
        </>
    )
}