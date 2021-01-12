import React from 'react'
import { YellowHighlightVisualitation } from './pages/YellowHighlightVisualitation'
import { WithOutVisualitation } from './pages/WithOutVisualitation'



export function TextVisualitaionFactory(props){

   
    const type = props.type

    if(type == "WithOutVisualitation"){
        return <WithOutVisualitation sentences={props.sentences}/>
    }

    if (type == "Gadual Highlight"){
        return <YellowHighlightVisualitation sentences={props.sentences}/>
    }


    









}