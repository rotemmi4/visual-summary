import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function SummaryOnlyVisualization(props){

    const sentences = props.sentences
    const [threshold , setThreshold] = useState(0.0)

    return (
        <>
            <Form.Control type="range" onChange={(e)=>{setThreshold(e.target.value / 100 )}} />
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span>{sentence.content}</span> : null
            ))}
        </>
    )
}