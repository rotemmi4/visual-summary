import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function HighlightVisualization(props){

    const sentences = props.sentences
    const [threshold , setThreshold] = useState(0.5)


    return (
        <>
            <Form.Control type="range" onChange={(e)=>{setThreshold(e.target.value / 100 )}}/>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{'background': 'rgba(238, 238, 0, 0.5)'}}>{sentence.content}</span> : <span>{sentence.content}</span>
            ))}
        </>
    )
}