import React from 'react'
import { GradualHighlightVisualization } from './pages/GradualHighlightVisualization'
import { WithOutVisualization } from './pages/WithOutVisualization'
import {GradualFontVisualization} from "./GradualFontVisualization";
import {SummaryOnlyVisualization} from "./SummaryOnlyVisualization";
import {HighlightVisualization} from "./HighlightVisualization";
import {FontSizeVisualization} from "./FontSizeVisualization";



export function TextVisualizationFactory(props){

   
    const type = props.type

    if(type == "Without Visualization"){
        return <WithOutVisualization sentences={props.sentences}/>
    }

    else if (type == "Gradual Highlight"){
        return <GradualHighlightVisualization sentences={props.sentences} />
    }
    else if (type == "Highlight"){
        return <HighlightVisualization sentences={props.sentences} selectColorR={props.selectColorR} selectColorG={props.selectColorG} selectColorB={props.selectColorB} />
    }
    else if (type == "Increased Font"){
        return <FontSizeVisualization sentences={props.sentences}/>
    }
    else if (type == "Gradual Font"){
        return <GradualFontVisualization sentences={props.sentences}/>
    }
    else if (type == "Summary Only"){
        return <SummaryOnlyVisualization sentences={props.sentences}/>
    }
    else{
        return <WithOutVisualization sentences={props.sentences}/>
    }


    









}