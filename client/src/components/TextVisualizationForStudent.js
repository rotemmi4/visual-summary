import React from 'react'
import { TextVisualizationFactory } from './TextVisualizationFactory'


export function TextVisualizationForStudent(props){

    const sentences = props.sentences
    const type = props.type
    const name = props.name
    const showBar = props.showBar

    let timer1 = undefined;

    const TIME_FOR_READING = 5;


    const timer = () => {
        let counter = TIME_FOR_READING;
        timer1 = setInterval(function() {
            // let span_timer = null
            // let span_timer = ;
            if (counter > 0) {
                // if(span_timer != null)
                // {
                try{
                    document.getElementById("maybeCount").innerHTML = "Seconds left: " + String(counter);
                }catch (e){
                    console.log("OK!")
                }

                // }
                counter--;
            }
            if (counter === 0) {
                // if(span_timer != null)
                // {
                try{
                    document.getElementById("maybeCount").innerHTML = "";
                }catch (e){
                    console.log("OK!")
                }
                console.log("WTF?!@")
                // }
                props.moveToQuestions()
                clearInterval(timer1);
                this.timer1 = undefined;
            }
        }, 1000);
    }

    return (
        <div>
            <div> <span id={"maybeCount"}/>  </div>
            {timer()}
            <br/>
            {name ? <h3 >{name}</h3> : null}
            <br/>
            <TextVisualizationFactory sentences={sentences} type={type} showBar={showBar}/>
            <br/>
            <br/>
            <button variant="primary" onClick={props.moveToQuestions}> Move to summary </button>
        </div>
    )
}