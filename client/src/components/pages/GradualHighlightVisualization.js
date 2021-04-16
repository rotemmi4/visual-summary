import React from 'react'


export function GradualHighlightVisualization(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span style={{'background': 'rgba('+props.selectColorR+','+props.selectColorG+','+props.selectColorB+','+ + sentence.weight+')'}}>{sentence.content}</span>
        ))
    )
}