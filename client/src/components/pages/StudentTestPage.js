import {Button, Container} from 'react-bootstrap'
import React, {useEffect, useRef, useState} from "react";
import {StudentQuestions} from "../StudentQuestions"
import {Link} from "react-router-dom";
import {
    get_text_ids_by_test_id,
    get_type_by_text_id, useGetTextWeightsStudent
} from "../../model/requests/StudentModelRestAPI";
import * as textModelRestAPI from "../../model/requests/TextModelRestAPI";
import {TextVisualizationForStudent} from "../TextVisualizationForStudent";
import {StudentSummary} from "../StudentSummary";
import * as StudentModelRestAPI from "../../model/requests/StudentModelRestAPI";



export function StudentTestPage(props){

    const testID = props.match.params.id;
    const NUMBER_OF_TEXTS = 2;
    const TIME_FOR_READING = 5; // 5 Seconds ! we need 5 * 60 => 5 Minutes!

    const [showText, setShowText] = useState(true)
    const [showSummary, setShowSummary] = useState(false)
    const [showQuestions, setShowQuestions] = useState(false)
    const [showRanking, setShowRanking] = useState(false)

    const [textNumberIndex, setTextNumberIndex] = useState(0);
    let lastText = false;

    const [allTextsIDs, setAllTextsIDs] = useState([]);
    useEffect(() => {
        get_text_ids_by_test_id(testID).then(response => {
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


    const moveToQuestions = ()=> {

        setShowSummary(false);
        setShowQuestions(true);
        if(textNumberIndex === (arrOfAllTexts.length -1))
        {
            lastText = true;

        }
    }
    const moveToSummary = ()=> {
        setShowText(false);
        setShowSummary(true);
    }
    let moveToRankBtn = null;
    const moveToText = ()=> {
        if(textNumberIndex < allTextsIDs.length -1)
        {
            setTextNumberIndex(textNumberIndex +1);
            setShowText(true);
            setShowQuestions(false);
            setShowSummary(false);
        }
        else
        {
            // move to Explanation Page

            setShowText(false);
            setShowQuestions(false);
            setShowSummary(false);
            setShowRanking(true);
        }

    }

    let text = <div>No non no</div>

    if(Object.keys(arrOfAllTexts).length === 2 && showText){
        text = <TextVisualizationForStudent className="mt-5" moveToQuestions={moveToSummary} sentences={arrOfAllTexts[textNumberIndex].sentences} type={arrOfAllTexts[textNumberIndex].type} showBar={false} name={arrOfAllTexts[textNumberIndex].name}/>
    }

    const summary = <StudentSummary moveToQuestions={moveToQuestions}/>

    const questions = <Container> <StudentQuestions test_name={testID} text_id={allTextsIDs[textNumberIndex]} moveToText={moveToText} lastText={lastText}/> </Container>


    return (
        <Container >
            {showText ? (<div>{text}</div>) : (<></>)}

            {showSummary && !showQuestions && !showText? (<div> {summary} </div>) : (<></>)}

            {showQuestions  ? (<div> {questions} </div>) : (<></>)}

            {showRanking ? ( <Link to={"/BeforeRankingPage"}>
                                     <button type="button">
                                          Move to rank!
                                     </button>
                                 </Link>) :(<></>)}
        </Container>

    )
}