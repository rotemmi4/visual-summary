import React, {} from 'react'


export function FontSizeVisualization(props){

    const sentences = props.sentences
    const threshold = props.threshold






    return (
        <>

            <br/>
            {sentences.map(sentence => (
                sentence.weight > threshold ? <span style={{whiteSpace: "pre-line",'font-size': '150%' }}>{sentence.content} </span> : <span >{sentence.content} </span>
            ))}
        </>
    )

}