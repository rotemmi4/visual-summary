import React from 'react'


export function GradualHighlightVisualization(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => {
            let colorIndex = parseInt(props.palette.length * sentence.weight);
            if (colorIndex == props.palette.length)
                colorIndex--;
            return <span style={{'background': props.palette[colorIndex]}}>{sentence.content}</span>
        })
    )
}