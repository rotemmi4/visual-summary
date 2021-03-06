import {Button, Container} from 'react-bootstrap'
import React, { useEffect, useState }  from "react";
import { get_questions_and_answers, send_info_on_text } from "../model/requests/StudentModelRestAPI";
import "../Questions.css"
import {Link} from "react-router-dom";


export function StudentQuestions(props) {

    const textID = props.text_id;
    const test_name = props.test_name;
    const full_test_name = props.full_test_name;
    // const lastText = props.lastTest
    const [timer, setTimer] = useState(new Date());
    // const [firstTime, setFirstTime] = useState(true);
    // const [move_to, setMove_to] = useState("BeforeRankingPage");
    // const [text_move_to, setText_move_to] = useState("Move to rank!");
    const [results,setResults] = useState([]);
    const [allQuestions, setAllQuestions] = useState([])
    useEffect(() => {
        get_questions_and_answers(textID).then(response => {
            setAllQuestions(response.data)
            setTimer(new Date())
        })
    },[])


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [showNext, setShowNext] = useState(false);
    const lastText = props.lastText


    const [isCorrect1, setIsCorrect1] = useState(false);
    let correct = false;
//    let showNext = false;

    const handleAnswerOptionClick = (isCorrect) => {
        // console.log("correct -> " + correct);
        if (isCorrect) {
            setScore(score + 1);
        }
        let dict = {}
        dict['answer'] = isCorrect;
        let time = new Date();
        time = time - timer;
        time /= 1000;
        dict['time'] = time;
        dict['question_id'] = allQuestions[currentQuestionIndex].question_id
        dict['student_id'] = localStorage.getItem('student_id');
        dict['test_name'] = test_name;
        let newList = results;
        newList.push(dict)
        setResults(newList)
        // set timer
        console.log(dict)
        setTimer(new Date())
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < allQuestions.length) {
            send_info_on_text(dict);
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setTimer(new Date())
            setShowScore(true);
            send_info_on_text(dict);

        }
    };

    let content = null


    if(allQuestions.length > 0)
    {
        content =
                <div className='app_question' style={{overflowY:"auto",width:"95%"}}>
                    {showScore ? (
                        <div className='score-section'>
                            {lastText  ?
                                (<Link to={"/BeforeRankingPage"}>
                                     <button type="button">
                                         {/*{props.text_move_to}*/}
                                         Click here to continue to next step!
                                     </button>
                                 </Link>) :
                                (<Button variant="warning" onClick={props.moveToText}>You have finished this text. Click on me to continue</Button>)}

                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestionIndex + 1}</span>/{allQuestions.length}
                                </div>
                                <div className='question-text'>{allQuestions[currentQuestionIndex].question_content}</div>
                            </div>
                            <div className='answer-section'>
                                {allQuestions[currentQuestionIndex].answer_options.map((answer_options) => (
                                    <button className="button_question" onClick={()=>{setIsCorrect1(answer_options.is_correct); setShowNext(true)}}>{answer_options.answer_content}</button>
                                    // <button className="button_question" onClick={() => handleAnswerOptionClick(answer_options.is_correct)}>{answer_options.answer_content}</button>
                                ))}
                                <br/>
                                {showNext ? (<button onClick={() => {handleAnswerOptionClick(isCorrect1); setShowNext(false)}}>Next</button>) : (<></>)}


                            </div>
                        </>
                    )}
                </div>
    }



    let clear_question = () => {
        setAllQuestions([])
    }


    return (
        <Container>
            <div>
                {content}
            </div>

            {/*<Button variant="primary" onClick={props.moveToText}> Move to text </Button>*/}

        </Container>

    )

    // <Link to={"/BeforeRankingPage"}> Move to ranking page. </Link>

}