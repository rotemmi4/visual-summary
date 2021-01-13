import React from 'react'
import { YellowHighlightVisualitation } from './pages/YellowHighlightVisualitation'
import { WithOutVisualitation } from './pages/WithOutVisualitation'
import {GradualFontVisualization} from "./GradualFontVisualization";
import {SummaryOnlyVisualization} from "./SummaryOnlyVisualization";



export function TextVisualitaionFactory(props){

   
    const type = props.type

    if(type == "Without Visualization"){
        return <WithOutVisualitation sentences={props.sentences}/>
    }

    else if (type == "Gradual Highlight"){
        return <YellowHighlightVisualitation sentences={props.sentences}/>
    }
    else if (type == "Gradual Font"){
        return <GradualFontVisualization sentences={props.sentences}/>
    }
    else if (type == "Summary Only"){
        return <SummaryOnlyVisualization sentences={props.sentences}/>
    }
    else{
        return <WithOutVisualitation sentences={props.sentences}/>
    }


    









}