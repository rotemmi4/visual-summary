import React from 'react'
import { GradualHighlightVisualization } from './pages/GradualHighlightVisualization'
import { WithOutVisualization } from './pages/WithOutVisualization'
import {GradualFontVisualization} from "./GradualFontVisualization";
import {SummaryOnlyVisualization} from "./SummaryOnlyVisualization";
import {HighlightVisualization} from "./HighlightVisualization";
import {FontSizeVisualization} from "./FontSizeVisualization";



export function TextVisualizationFactory(props){

   
    const type = props.type
    const showBar = props.showBar

    if(type == "Without Visualization"){
        return <WithOutVisualization sentences={props.sentences} showBar={showBar}/>
    }

    else if (type == "Gradual Highlight"){
        return <GradualHighlightVisualization sentences={props.sentences} selectColorR={props.selectColorR} selectColorG={props.selectColorG} selectColorB={props.selectColorB}/>
    }
    else if (type == "Highlight"){
        return <HighlightVisualization sentences={props.sentences} selectColorR={props.selectColorR} selectColorG={props.selectColorG} selectColorB={props.selectColorB} />
    }
    else if (type == "Increased Font"){
        return <FontSizeVisualization sentences={props.sentences} showBar={showBar}/>
    }
    else if (type == "Gradual Font"){
        return <GradualFontVisualization sentences={props.sentences} showBar={showBar}/>
    }
    else if (type == "Summary Only"){
        return <SummaryOnlyVisualization sentences={props.sentences} showBar={showBar}/>
    }
    else{
        return <WithOutVisualization sentences={props.sentences} showBar={showBar}/>
    }


    









}