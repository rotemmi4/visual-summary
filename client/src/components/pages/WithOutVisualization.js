import React from 'react'


export function WithOutVisualization(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span>{sentence.content}</span>
        ))
    )
}