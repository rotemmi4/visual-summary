import React from 'react'
import { TextVisualizationFactory } from './TextVisualizationFactory'


export function TextVisualization(props){

    const sentences = props.sentences
    const type = props.type
    const name = props.name
    const showBar = props.showBar

    

    return (
        <div>
            {name ? <h3 >{name}</h3> : null}
            <TextVisualizationFactory sentences={sentences} type={type} selectColorR={props.selectColorR} selectColorG={props.selectColorG} selectColorB={props.selectColorB} showBar={showBar}/>
        </div>
    )
}