import React, {} from 'react'


export function HighlightVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold




    return (
        <>

            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{'background': props.HighlightColor[0], whiteSpace: "pre-line"}}>{sentence.content} </span> : <span>{sentence.content} </span>
            ))}
        </>
    )
}