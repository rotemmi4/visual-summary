import React from 'react'


export function FontSizeVisualization(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span style={{'font-size': + 100 + '%' + sentence.weight}}>{sentence.content}</span>
        ))
    )
}