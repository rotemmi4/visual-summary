import React, {} from 'react'


export function SummaryOnlyVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold


    return (
        <>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{whiteSpace: "pre-line", 'font-size': '120%'}}>{sentence.content} </span> : null
            ))}
        </>
    )
}