import {Button, Container} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import {StudentQuestions} from "../StudentQuestions"
import {Link} from "react-router-dom";
import {
    get_text_ids_and_info_by_test_id,
    get_text_ids_by_test_id,
    getTestGlobalInfo
} from "../../model/requests/StudentModelRestAPI";
import {TextVisualizationForStudent} from "../TextVisualizationForStudent";
import {StudentSummary} from "../StudentSummary";
import * as StudentModelRestAPI from "../../model/requests/StudentModelRestAPI";
import {COLORS} from "../../colors";
import "./StudentTestPage.css"




export function StudentTestPage(props){

    const testIDFull = props.match.params.id;
    const testID = testIDFull.split("is")[0];
    localStorage.setItem('test_id', testID);
    localStorage.setItem('testIDFull', testIDFull);
    const NUMBER_OF_TEXTS = 2;
    const TIME_FOR_READING = 5; // 5 Seconds ! we need 5 * 60 => 5 Minutes!

    const [showText, setShowText] = useState(true)
    const [showSummary, setShowSummary] = useState(false)
    const [showQuestions, setShowQuestions] = useState(false)
    const [showRanking, setShowRanking] = useState(false)

    const [newText, setNewText] = useState(true)
    const [summaryTimer, setSummaryTimer] = useState(new Date())
    const [readingTimer, setReadingTimer] = useState(0.0)


    const [textNumberIndex, setTextNumberIndex] = useState(0);
    let lastText = false;

    let colR="255",colG="255",colB="255"
    const arrOfAllTexts = {};
    const [allTextsIDsInfo, setAllTextsIDsInfo] = useState([]);
    useEffect(() => {
        getTestGlobalInfo(testIDFull).then(response => {
            let arrInfoOnText = [];
            for(let i=0; i<response.data.length; i++){
                let temp = {};
                temp["name"] = response.data[i]["name"];
                temp["property_name"] = response.data[i]["property_name"];
                temp["property_type"] = response.data[i]["property_type"];
                temp["property_value"] = response.data[i]["property_value"];
                temp["sentences"] = response.data[i]["sentences"];
                temp["set_num"] = response.data[i]["set_num"];
                temp["test_id"] = response.data[i]["test_id"];
                temp["text_id"] = response.data[i]["text_id"];
                temp["threshold"] = response.data[i]["threshold"];
                temp["type"] = response.data[i]["type"];
                temp["visualiztion_id"] = response.data[i]["visualiztion_id"];
                temp["size"] = "3";
                temp["color"] = "Yellow";
                try{
                    if(temp["property_value"].split(',').length > 1)
                    {
                        temp["size"] = temp["property_value"].split(',')[0]
                        temp["color"] = temp["property_value"].split(',')[1]
                    }
                }catch (e){}
                arrOfAllTexts[i] = temp;
                arrInfoOnText.push(temp);
            }
            setAllTextsIDsInfo(arrInfoOnText)
        });
    },[]);


    let text = <div>No non no</div>
    if(allTextsIDsInfo.length > 0 )
    {
        var finalTexts = []
        for(let i=0; i<allTextsIDsInfo.length; i++)
        {
            finalTexts.push(allTextsIDsInfo[i])
        }
    }

    const moveToQuestions = ()=> {
        setShowSummary(false);
        setNewText(false);
        setShowQuestions(true);
        if(textNumberIndex === (finalTexts.length -1))
        {
            lastText = true;
        }
    }
    const moveToSummary = (startReadingTime)=> {
        let readingTime1 = new Date();
        readingTime1 = readingTime1 - startReadingTime;
        readingTime1 /= 1000;
        readingTime1 += TIME_FOR_READING;
        setReadingTimer(readingTime1);

        setNewText(false);
        setShowSummary(true);
    }

    const moveToText = ()=> {
        if(textNumberIndex < finalTexts.length -1)
        {
            setNewText(true);
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




    if(finalTexts && finalTexts.length > 0 && showText){

        text = <TextVisualizationForStudent className="mt-5"
                                            moveToSummary={moveToSummary}
                                            sentences={finalTexts[textNumberIndex].sentences}
                                            type={finalTexts[textNumberIndex].type} showBar={false}
                                            name={finalTexts[textNumberIndex].name}
                                            HighlightColor={COLORS[1][finalTexts[textNumberIndex].color]}
                                            palette={COLORS[finalTexts[textNumberIndex].size][finalTexts[textNumberIndex].color]}
                                            selectColorR={255}
                                            selectColorG={255}
                                            selectColorB={255}
                                            threshold={finalTexts[textNumberIndex].threshold}
                                            readingTime={new Date()}
                                            TIME_FOR_READING={TIME_FOR_READING}
                                            newText={newText}/>
    }

    if(finalTexts && finalTexts.length > 0)
    {
            var summary = <StudentSummary moveToQuestions={moveToQuestions}
                                          text_id={finalTexts[textNumberIndex].text_id}
                                          readingTime={readingTimer}
                        />

    }
    if(finalTexts && finalTexts.length > 0)
    {
            var questions = <Container> <StudentQuestions full_test_name={testIDFull}
                                                          test_name={testID}
                                                          text_id={finalTexts[textNumberIndex].text_id}
                                                          moveToText={moveToText}
                                                          lastText={lastText}
                                                          // move_to={move_to}
                                                          // text_move_to={text_move_to}
                            /> </Container>

    }


    return (
        <Container className='rowC'>
            {showText ? (<div>{text}</div>) : (<></>)}

            {/*{showSummary && !showQuestions ? (<div> {summary} </div>) : (<></>)}*/}

            {showSummary  ? (<div> {summary} </div>) : (<></>)}

            {showQuestions  ? (<div> {questions} </div>) : (<></>)}

            {showRanking ? ( <Link to={"/BeforeRankingPage"}>
                                     <Button type="button">
                                          You finished the reading!<br/> Click to continue.
                                     </Button>
                                 </Link>) :(<></>)}
        </Container>

    )
}