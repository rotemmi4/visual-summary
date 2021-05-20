import {Button, Container} from 'react-bootstrap'
import React, {useEffect, useState} from "react";
import {StudentQuestions} from "../StudentQuestions"
import {Link} from "react-router-dom";
import {get_text_ids_and_info_by_test_id, get_text_ids_by_test_id} from "../../model/requests/StudentModelRestAPI";
import {TextVisualizationForStudent} from "../TextVisualizationForStudent";
import {StudentSummary} from "../StudentSummary";
import * as StudentModelRestAPI from "../../model/requests/StudentModelRestAPI";
import {COLORS} from "../../colors";
import "./StudentTestPage.css"




export function StudentTestPage(props){

    const testID = props.match.params.id;
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
    // const [readingTime, setReadingTime] = useState("0");
    let lastText = false;
    // let readingTime;

    let colR="255",colG="255",colB="255"

    const [allTextsIDsInfo, setAllTextsIDsInfo] = useState([]);
    const [allTextsIDs, setAllTextsIDs] = useState([]);
    useEffect(() => {
        get_text_ids_and_info_by_test_id(testID).then(response => {
            let arr_ids = [];
            let arrInfoOnText = [];
            // print response!
            // console.log("response.data");
            // console.log(response.data);
            for(let i=0; i<response.data.length; i++){
                let temp = {};
                temp["name"] = response.data[i]["name"];
                temp["property_name"] = response.data[i]["property_name"];
                temp["property_type"] = response.data[i]["property_type"];
                temp["property_value"] = response.data[i]["property_value"];
                temp["test_id"] = response.data[i]["test_id"];
                temp["text_id"] = response.data[i]["text_id"];
                temp["threshold"] = response.data[i]["threshold"];
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
                arr_ids.push(response.data[i]["text_id"]);
                arrInfoOnText.push(temp);
            }
            console.log(arrInfoOnText);
            setAllTextsIDs(arr_ids);
            setAllTextsIDsInfo(arrInfoOnText)
        });
    },[]);

    let text_num = 8;
    const text1 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[0]);
    const text2 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[1]);
    const text3 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[2]);
    const text4 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[3]);
    const text5 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[4]);
    const text6 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[5]);
    const text7 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[6]);
    const text8 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[7]);


    window['text1'] = text1
    window['text2'] = text2
    window['text3'] = text3
    window['text4'] = text4
    window['text5'] = text5
    window['text6'] = text6
    window['text7'] = text7
    window['text8'] = text8



    const arrOfAllTexts = {};

    if( text1.data && text2.data && text3.data && text4.data && text5.data && text6.data && text7.data && text8.data &&
        text1.data.length > 0 && text2.data.length > 0 && text3.data.length > 0
        && text4.data.length > 0 && text5.data.length > 0 && text6.data.length > 0 && text7.data.length > 0
        && text8.data.length > 0)
    {
        for(let i=0; i<text_num; i++)
        {
            arrOfAllTexts[i] = window['text'+(i+1)].data[0];
            arrOfAllTexts[i]["threshold"] = allTextsIDsInfo[i]["threshold"]
            arrOfAllTexts[i]["property_value"] = allTextsIDsInfo[i]["property_value"]
            arrOfAllTexts[i]["color"] = allTextsIDsInfo[i]["color"]
            arrOfAllTexts[i]["size"] = allTextsIDsInfo[i]["size"]
            arrOfAllTexts[i]["property_name"] = allTextsIDsInfo[i]["property_name"]
        }
        console.log(arrOfAllTexts);
    }


    const moveToQuestions = ()=> {

        // setShowSummary(false);
        setNewText(false);
        setShowQuestions(true);
        if(textNumberIndex === (arrOfAllTexts.length -1))
        {
            lastText = true;
        }
    }
    const moveToSummary = (startReadingTime)=> {
        // setShowText(false);
        let readingTime1 = new Date();
        readingTime1 = readingTime1 - startReadingTime;
        readingTime1 /= 1000;
        readingTime1 += TIME_FOR_READING;
        setReadingTimer(readingTime1);

        setNewText(false);
        setShowSummary(true);
    }
    let moveToRankBtn = null;
    const moveToText = ()=> {

        if(textNumberIndex < allTextsIDs.length -1)
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

    let text = <div>No non no</div>

    if(Object.keys(arrOfAllTexts).length === 8 && showText){
        text = <TextVisualizationForStudent className="mt-5"
                                            moveToSummary={moveToSummary}
                                            sentences={arrOfAllTexts[textNumberIndex].sentences}
                                            type={arrOfAllTexts[textNumberIndex].type} showBar={false}
                                            name={arrOfAllTexts[textNumberIndex].name}
                                            HighlightColor={COLORS[1][arrOfAllTexts[textNumberIndex].color]}
                                            palette={COLORS[arrOfAllTexts[textNumberIndex]['size']][arrOfAllTexts[textNumberIndex]['color']]}
                                            selectColorR={255}
                                            selectColorG={255}
                                            selectColorB={255}
                                            threshold={arrOfAllTexts[textNumberIndex].threshold}
                                            readingTime={new Date()}
                                            TIME_FOR_READING={TIME_FOR_READING}
                                            newText={newText}/>
    }

    const summary = <StudentSummary moveToQuestions={moveToQuestions} text_id={allTextsIDs[textNumberIndex]} readingTime={readingTimer} />

    const questions = <Container> <StudentQuestions test_name={testID} text_id={allTextsIDs[textNumberIndex]} moveToText={moveToText} lastText={lastText}/> </Container>


    return (
        <Container className='rowC'>
            {showText ? (<div>{text}</div>) : (<></>)}

            {showSummary && !showQuestions ? (<div> {summary} </div>) : (<></>)}

            {showQuestions  ? (<div> {questions} </div>) : (<></>)}

            {showRanking ? ( <Link to={"/BeforeRankingPage"}>
                                     <Button type="button">
                                          You finished the reading!<br/> Click to continue.
                                     </Button>
                                 </Link>) :(<></>)}
        </Container>

    )
}