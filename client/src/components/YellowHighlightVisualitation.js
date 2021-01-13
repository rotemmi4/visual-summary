import React from 'react'


export function YellowHighlightVisualitation(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span style={{'background': 'rgba(238, 238, 0,' + sentence.weight +')'}}>{sentence.content}</span>
        ))
    )
}