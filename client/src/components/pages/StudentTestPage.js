import {Button, Container} from 'react-bootstrap'
import React, {useEffect, useRef, useState} from "react";
import {StudentQuestions} from "../StudentQuestions"
import {
    get_text_ids_by_test_id,
    get_type_by_text_id, useGetTextWeightsStudent
} from "../../model/requests/StudentModelRestAPI";
import * as textModelRestAPI from "../../model/requests/TextModelRestAPI";
import {TextVisualization} from "../TextVisualization";



export function StudentTestPage(props){

    const testID = props.match.params.id;
    const NUMBER_OF_TEXTS = 2;

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


    const text1 = textModelRestAPI.useGetTextWeights(allTextsIDs[0]);
    const text2 = textModelRestAPI.useGetTextWeights(allTextsIDs[1]);

    const [textType1,setTextType1] = useState("");
    const [textType2,setTextType2] = useState("");

    const arrOfAllTexts = {};
    const arrTypes = {};

    if(text1.data.length > 0 && text2.data.length > 0 )
    {
        // first text
        arrOfAllTexts[0] = text1.data[0];
        if(arrTypes[0] == null)
        {
            get_type_by_text_id(allTextsIDs[0]).then(response => {setTextType1(response.data);})
        }
        arrTypes[0] = textType1;

        // second text
        arrOfAllTexts[1] = text2.data[0];
        get_type_by_text_id(allTextsIDs[1]).then(response => {
                if(response.data !== undefined)
                {
                    setTextType2(response.data);
                }
            })
        arrTypes[1] = textType2;
    }

    const [showText, setShowText] = useState(true)
    const [showSummary, setShowSummary] = useState(false)
    const [showQuestions, setShowQuestions] = useState(false)

    let text = <div>No non no</div>

    let summary = <div>Summary!! :)</div>

    let questions = <Container> <StudentQuestions text_id={1}/> </Container>

    if(Object.keys(arrOfAllTexts).length === 2 && Object.keys(arrTypes).length === 2){
        text = <TextVisualization className="mt-5" sentences={arrOfAllTexts[textNumberIndex].sentences} type={arrTypes[textNumberIndex]} showBar={false} name={arrOfAllTexts[textNumberIndex].name}/>
    }



    let timer = () => {
        let counter = 5; // Seconds ! we need 5 * 60 => 5 Minutes!
        setInterval(function() {

            let span = document.getElementById("maybeCount");
            if (counter > 0) {
              span.innerHTML = "Seconds left: " + String(counter);
              counter--;
            }
            if (counter === 0) {
                // Times up
                span.innerHTML = "";
                setShowText(false);
                // need to show summary!
                setShowQuestions(true);
                clearInterval(counter);
            }
          }, 1000);
    }

    return (
        <Container >
            {showText ? (
                        <div>
                            <span id={"maybeCount"}></span>
                            {timer()}
                            {text} </div>) : (<></>)}
            {showSummary ? (
                        <div>
                            <span id={"maybeCount"}></span>
                            {summary}</div>) : (<></>)}
            {showQuestions ? (
                        <div>
                            <span id={"maybeCount"}></span>
                            {questions} </div>) : (<></>)}
        </Container>

    )
}