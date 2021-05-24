import React, {useState} from 'react'
import { TextVisualizationFactory } from './TextVisualizationFactory'



export function TextVisualizationForStudent(props){

    const sentences = props.sentences
    const type = props.type
    const name = props.name
    const showBar = props.showBar

    const [showBtn, setShowBtn] = useState(false)
    // const [countBtn, setCountBtn] = useState(0)


    let timer1 = undefined;
    const TIME_FOR_READING = props.TIME_FOR_READING;

    const startReadingTime = new Date();


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
    // let timerBtn = <div>Check</div>


    const timer = () => {
        let counter = TIME_FOR_READING;
        timer1 = setInterval(function() {
            console.log(counter);
            counter--;
            if (counter < 0  ) {
                try{
                    if(props.newText)
                    {
                        setShowBtn(true);
                    }
                    else {
                        setShowBtn(false);
                    }

                    clearInterval(timer1);
                    this.timer1 = undefined;
                }catch (e){
                    console.log("OK!")
                }
            }

        }, 1000);
    }




    return (
        <div style={{overflow: "auto", height: "700px", width:"100%"}}>
        {/*<div style={{overflow: "auto", height: "700px", width: "45%"}}>*/}

            {/*<div> <span id={"maybeCount"}/>  </div>*/}
            {/*{timer()}*/}

            <br/>
            {name ? <h3 >{name}</h3> : null}

            <br/>
            <TextVisualizationFactory sentences={sentences}
                                      type={type}
                                      showBar={showBar}
                                      threshold={props.threshold}
                                      HighlightColor={props.HighlightColor}
                                      palette={props.palette}
                                      selectColorR={255}
                                      selectColorG={255}
                                      selectColorB={255}/>
            <br/>
            <br/>
            {/*<button variant="primary" onClick={props.moveToSummary}> Move to summary </button>*/}
            {showBtn && props.newText ? <button variant="primary" onClick={()=>{props.moveToSummary(startReadingTime); setShowBtn(false)}}> Move to summary </button> : timer() }
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    )
}