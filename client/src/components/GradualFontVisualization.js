import React from 'react'


export function GradualFontVisualization(props){

    const sentences = props.sentences

    return (
        sentences.map(sentence => (
            <span style={{whiteSpace: "pre-line", 'font-size': + ((100 * sentence.weight) + 60) + '%'}}>{sentence.content} </span>
        )))

//    return (
//
//        sentences.map(sentence => {
//            if (sentence.weight <= 0.25)
//                return <span style={{
//                    whiteSpace: "pre-line",
//                    'font-size': '75%'
//                }}>{sentence.content} </span>
//            if (sentence.weight >0.25 &&  sentence.weight<= 0.5)
//                return <span style={{
//                    whiteSpace: "pre-line",
//                    'font-size': '100%'
//                }}>{sentence.content} </span>
//            if (sentence.weight> 0.5 && sentence.weight <= 0.75)
//                return <span style={{
//                    whiteSpace: "pre-line",
//                    'font-size': '130%'
//                }}>{sentence.content} </span>
//            if (sentence.weight> 0.75 && sentence.weight <= 1)
//                return <span style={{
//                    whiteSpace: "pre-line",
//                    'font-size': '150%'
//                }}>{sentence.content} </span>
//        })
//    )
}