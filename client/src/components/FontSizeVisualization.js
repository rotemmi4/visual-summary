import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function FontSizeVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold






    return (
        <>

            <br/>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{'font-size': '150%' }}>{sentence.content}</span> : <span >{sentence.content}</span>
            ))}
        </>
    )

}