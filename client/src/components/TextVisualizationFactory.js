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
    const threshold = props.threshold
    if(type == "Without Visualization"){
        return <WithOutVisualization sentences={props.sentences}/>
    }

    else if (type == "Gradual Highlight"){
        return <GradualHighlightVisualization sentences={props.sentences} palette={props.palette} selectColorR={props.selectColorR} selectColorG={props.selectColorG} selectColorB={props.selectColorB}/>
    }
    else if (type == "Highlight"){
        return <HighlightVisualization sentences={props.sentences} HighlightColor={props.HighlightColor} selectColorR={props.selectColorR} selectColorG={props.selectColorG} selectColorB={props.selectColorB} threshold={threshold} />
    }
    else if (type == "Font"){
        return <FontSizeVisualization sentences={props.sentences} threshold={threshold}/>
    }
    else if (type == "Gradual Font"){
        return <GradualFontVisualization sentences={props.sentences} />
    }
    else if (type == "Summary Only"){
        return <SummaryOnlyVisualization sentences={props.sentences} threshold={threshold}/>
    }
    else{
        return <WithOutVisualization sentences={props.sentences}/>
    }


    









}