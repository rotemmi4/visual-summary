import React from 'react'


export function GradualFontVisualization(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span style={{'font-size': + ((100 * sentence.weight) + 60) + '%'}}>{sentence.content}</span>
        ))
    )
}