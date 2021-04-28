import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function HighlightVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold




    return (
        <>

            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{'background': props.HighlightColor[0]}}>{sentence.content}</span> : <span>{sentence.content}</span>
            ))}
        </>
    )
}