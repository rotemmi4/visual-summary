import React from 'react'
import { TextVisualitaionFactory } from './TextVisualitaionFactory'


export function TextVisualitaion(props){

    const sentences = props.sentences
    const type = props.type
    const name = props.name

    

    return (
        <div>
            {name ? <h1>{name}</h1> : null}
            <TextVisualitaionFactory sentences={sentences} type={type}/>
        </div>
    )
}