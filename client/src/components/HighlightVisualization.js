import React, {} from 'react'


export function HighlightVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold



    return (
        <>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{'background': props.HighlightColor[0], whiteSpace: "pre-line", 'font-size': '120%'}}>{sentence.content} </span> : <span style={{whiteSpace: "pre-line", 'font-size': '120%'}}>{sentence.content} </span>
            ))}
        </>
    )
}