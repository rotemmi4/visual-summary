import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function FontSizeVisualization(props){

    const sentences = props.sentences
    const [threshold , setThreshold] = useState(0.5)

    return (
        <>
            <Form.Control type="range" onChange={(e)=>{setThreshold(e.target.value / 100 )}}/>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{'font-size': '150%' }}>{sentence.content}</span> : <span >{sentence.content}</span>
            ))}
        </>
    )

}