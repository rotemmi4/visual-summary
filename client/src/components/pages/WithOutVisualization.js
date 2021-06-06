import React from 'react'


export function WithOutVisualization(props){

    const sentences = props.sentences

    return (
            sentences.map(sentence => (
            <span style={{whiteSpace: "pre-line", 'font-size': '120%'}}  >{sentence.content} </span>
            ))

    )
}