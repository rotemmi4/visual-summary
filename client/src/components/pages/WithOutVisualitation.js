import React from 'react'


export function WithOutVisualitation(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span>{sentence.content}</span>
        ))
    )
}