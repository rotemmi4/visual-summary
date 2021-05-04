import React, {} from 'react'


export function SummaryOnlyVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold




    return (
        <>

            {sentences.map(sentence => (
                sentence.weight > threshold ? <span>{sentence.content}</span> : null
            ))}
        </>
    )
}