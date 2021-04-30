import React, {useState} from 'react'
import {Form} from "react-bootstrap";


export function SummaryOnlyVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold




    return (
        <>

            {sentences.map(sentence => (
                sentence.weight > threshold ? <span>{sentence.content}</span> : null
            ))}
        </>
    )
}