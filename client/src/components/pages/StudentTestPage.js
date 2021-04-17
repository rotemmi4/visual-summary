import {Button, Container} from 'react-bootstrap'
import React, {useEffect, useRef, useState} from "react";
import {StudentQuestions} from "../StudentQuestions"
import {
    get_text_ids_by_test_id,
    get_type_by_text_id, useGetTextWeightsStudent
} from "../../model/requests/StudentModelRestAPI";
import * as textModelRestAPI from "../../model/requests/TextModelRestAPI";
import {TextVisualization} from "../TextVisualization";
import {StudentSummary} from "../StudentSummary";
import * as StudentModelRestAPI from "../../model/requests/StudentModelRestAPI";



export function StudentTestPage(props){

    const testID = props.match.params.id;
    const NUMBER_OF_TEXTS = 2;
    const TIME_FOR_READING = 5; // 5 Seconds ! we need 5 * 60 => 5 Minutes!

    const [showText, setShowText] = useState(true)
    const [showSummary, setShowSummary] = useState(false)
    const [showQuestions, setShowQuestions] = useState(false)

    const [textNumberIndex, setTextNumberIndex] = useState(0);

    const [allTextsIDs, setAllTextsIDs] = useState([]);
    useEffect(() => {
        get_text_ids_by_test_id(testID).then(response => {
            // console.log(response.data);
            let arr = [];
            for(let i=0; i<response.data.length; i++){
                arr.push(response.data[i]["text_id"]);
            }
            setAllTextsIDs(arr);
        });
    },[]);


    const text1 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[0]);
    const text2 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[1]);

    const arrOfAllTexts = {};

    if( text1.data && text2.data && text1.data.length > 0 && text2.data.length > 0 ) {
        arrOfAllTexts[0] = text1.data[0];
        arrOfAllTexts[1] = text2.data[0];
    }

    const moveToSummary = ()=> {
        setShowText(!showText);
        setShowSummary(!showSummary);
    }

    const moveToQuestions = ()=> {
        setShowSummary(!showSummary);
        setShowQuestions(!showQuestions);
    }



    let text = <div>No non no</div>

    if(Object.keys(arrOfAllTexts).length === 2 ){
        text = <TextVisualization className="mt-5" sentences={arrOfAllTexts[textNumberIndex].sentences} type={arrOfAllTexts[textNumberIndex].type} showBar={false} name={arrOfAllTexts[textNumberIndex].name}/>
    }

    const summary = <StudentSummary moveToQuestions={moveToQuestions}/>

    const questions = <Container> <StudentQuestions text_id={1}/> </Container>


    let timer = () => {
        let counter = TIME_FOR_READING;
        setInterval(function() {

            let span = document.getElementById("maybeCount");
            if (counter > 0) {
              span.innerHTML = "Seconds left: " + String(counter);
              counter--;
            }
            if (counter === 0) {
                // Times up
                span.innerHTML = "";
                moveToSummary()
                clearInterval(counter);
            }
          }, 1000);
    }

    return (
        <Container >
            {showText ? (
                        <div>
                            <span id={"maybeCount"}/> {timer()}
                            {text} </div>) : (<></>)}
            {showSummary ? (
                        <div> <span id={"maybeCount"}/> {summary}</div>) : (<></>)}
            {showQuestions ? (
                        <div> <span id={"maybeCount"}/>{questions} </div>) : (<></>)}
        </Container>

    )
}