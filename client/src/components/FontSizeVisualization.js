import React, {} from 'react'
import {Container} from "react-bootstrap";


export function FontSizeVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold






    return (
        <>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{whiteSpace: "pre-line",'font-size': '150%' }}>{sentence.content} </span> : <span style={{whiteSpace: "pre-line"}}>{sentence.content} </span>
            ))}
        </>
    )

}