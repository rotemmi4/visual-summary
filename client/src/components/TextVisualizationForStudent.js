import React from 'react'
import { TextVisualizationFactory } from './TextVisualizationFactory'
import {COLORS, COLORS_SIZES} from "../colors";


export function TextVisualizationForStudent(props){

    const sentences = props.sentences
    const type = props.type
    const name = props.name
    const showBar = props.showBar



    let timer1 = undefined;

    const TIME_FOR_READING = 5;


    // const timer = () => {
    //     let counter = TIME_FOR_READING;
    //     timer1 = setInterval(function() {
    //         if (counter > 0) {
    //             try{
    //                 document.getElementById("maybeCount").innerHTML = "Seconds left: " + String(counter);
    //             }catch (e){
    //                 console.log("OK!")
    //             }
    //
    //             counter--;
    //         }
    //         if (counter === 0) {
    //             try{
    //                 document.getElementById("maybeCount").innerHTML = "";
    //             }catch (e){
    //                 console.log("OK!")
    //             }
    //
    //             props.moveToQuestions()
    //             clearInterval(timer1);
    //             this.timer1 = undefined;
    //         }
    //     }, 1000);
    // }

    return (
        <div>
            <div> <span id={"maybeCount"}/>  </div>
            {/*{timer()}*/}
            <br/>
            {name ? <h3 >{name}</h3> : null}
            <br/>
            {/*<TextVisualizationFactory sentences={sentences} type={type} showBar={showBar} threshold={threshold} HiglightColor={COLORS[1][color]} plette={plette}/>*/}
            <br/>
            <br/>
            <button variant="primary" onClick={props.moveToQuestions}> Move to summary </button>
        </div>
    )
}