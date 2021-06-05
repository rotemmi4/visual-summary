import React from 'react'


export function GradualFontVisualization(props){

    const sentences = props.sentences

    return (

        sentences.map(sentence => {
            if (sentence.weight <= 0.25)
                return <span style={{
                    whiteSpace: "pre-line",
                    'font-size': '90%'
                }}>{sentence.content} </span>
            if (sentence.weight >0.25 &&  sentence.weight<= 0.5)
                return <span style={{
                    whiteSpace: "pre-line",
                    'font-size': '120%'
                }}>{sentence.content} </span>
            if (sentence.weight> 0.5 && sentence.weight <= 0.75)
                return <span style={{
                    whiteSpace: "pre-line",
                    'font-size': '150%'
                }}>{sentence.content} </span>
            if (sentence.weight> 0.75 && sentence.weight <= 1)
                return <span style={{
                    whiteSpace: "pre-line",
                    'font-size': '180%'
                }}>{sentence.content} </span>
        })
    )
}