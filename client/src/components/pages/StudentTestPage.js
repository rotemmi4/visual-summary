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
    const [changed, setChanged] = useState(false)
    const [changed2, setChanged2] = useState(false)
    // const [readingTime, setReadingTime] = useState("0");
    let lastText = false;
    // let readingTime;

    let colR="255",colG="255",colB="255"
    const arrOfAllTexts = {};
    const [allTextsIDsInfo, setAllTextsIDsInfo] = useState([]);
    const [allTextsIDs, setAllTextsIDs] = useState([]);
    useEffect(() => {
        getTestGlobalInfo(testIDFull).then(response => {
            // let arr_ids = [];
            let arrInfoOnText = [];
            // console.log("response.data1");
            // console.log(response.data);
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
                // arr_ids.push(response.data[i]["text_id"]);
                arrInfoOnText.push(temp);
            }
            // console.log(arrInfoOnText);
            // setAllTextsIDs(arr_ids);
            setAllTextsIDsInfo(arrInfoOnText)
            // console.log("setAllTextsIDsInfo");
            // console.log(setAllTextsIDsInfo);
        });
    },[]);


    let text = <div>No non no</div>
    // while(allTextsIDsInfo && allTextsIDsInfo.length === 0){}
    // if(!changed2)
    // {
    //     var finalTexts = []
    //     setChanged2(true)
    // }

    if(allTextsIDsInfo.length > 0 )
    {
        // setChanged(true);
        var finalTexts = []
        // console.log("allTextsIDsInfo");
        // console.log(allTextsIDsInfo);
        for(let i=0; i<allTextsIDsInfo.length; i++)
        {
            finalTexts.push(allTextsIDsInfo[i])
        }
        // console.log("allTextsIDsInfo.length > 0")
        // console.log(finalTexts)

        // console.log("finalTexts[textNumberIndex].color")
        // console.log(finalTexts[textNumberIndex].color)
        console.log("finalTexts")
        console.log(finalTexts)
    }

    //
    // let text_num = 8;
    // const text1 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[0]);
    // const text2 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[1]);
    // const text3 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[2]);
    // const text4 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[3]);
    // const text5 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[4]);
    // const text6 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[5]);
    // const text7 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[6]);
    // const text8 = StudentModelRestAPI.useGetTextTotalInfo(allTextsIDs[7]);


    // window['text1'] = text1
    // window['text2'] = text2
    // window['text3'] = text3
    // window['text4'] = text4
    // window['text5'] = text5
    // window['text6'] = text6
    // window['text7'] = text7
    // window['text8'] = text8
    //
    // console.log("arrOfAllTexts")
    // console.log(arrOfAllTexts)


    // if( text1.data && text2.data && text3.data && text4.data && text5.data && text6.data && text7.data && text8.data &&
    //     text1.data.length > 0 && text2.data.length > 0 && text3.data.length > 0
    //     && text4.data.length > 0 && text5.data.length > 0 && text6.data.length > 0 && text7.data.length > 0
    //     && text8.data.length > 0)
    // {
    //     for(let i=0; i<text_num; i++)
    //     {
    //         arrOfAllTexts[i] = window['text'+(i+1)].data[0];
    //         arrOfAllTexts[i]["threshold"] = allTextsIDsInfo[i]["threshold"]
    //         arrOfAllTexts[i]["property_value"] = allTextsIDsInfo[i]["property_value"]
    //         arrOfAllTexts[i]["color"] = allTextsIDsInfo[i]["color"]
    //         arrOfAllTexts[i]["size"] = allTextsIDsInfo[i]["size"]
    //         arrOfAllTexts[i]["property_name"] = allTextsIDsInfo[i]["property_name"]
    //     }
    //     // console.log(arrOfAllTexts);
    // }


    const moveToQuestions = ()=> {
        // console.log("HERE?")
        setShowSummary(false);
        setNewText(false);
        setShowQuestions(true);
        // console.log("finalTexts.length -1")
        // console.log(finalTexts.length -1)
        // console.log("textNumberIndex")
        // console.log(textNumberIndex)
        if(textNumberIndex === (finalTexts.length -1))
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
        // console.log("textNumberIndex")
        // console.log(textNumberIndex)
        // console.log("finalTexts.length -1")
        // console.log(finalTexts.length -1)
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



    // console.log("finalTexts?")
    // console.log(finalTexts)
    // if(finalTexts)
    // {
    //     console.log("finalTexts.length?")
    //     console.log(finalTexts.length)
    // }
    //
    // console.log("showText")
    // console.log(showText)


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
            var summary = <StudentSummary moveToQuestions={moveToQuestions} text_id={finalTexts[textNumberIndex].text_id} readingTime={readingTimer} />

    }
    if(finalTexts && finalTexts.length > 0)
    {
            var questions = <Container> <StudentQuestions test_name={testID} text_id={finalTexts[textNumberIndex].text_id} moveToText={moveToText} lastText={lastText}/> </Container>

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