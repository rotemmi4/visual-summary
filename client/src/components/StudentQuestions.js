import {Button, Container} from 'react-bootstrap'
import React, { useEffect, useState }  from "react";
import { get_questions_and_answers, send_info_on_text } from "../model/requests/StudentModelRestAPI";
import "../Questions.css"


export function StudentQuestions(props) {

    const textID = props.text_id
    const [timer, setTimer] = useState(new Date())
    const [results,setResults] = useState([])
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

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        let dict = {}
        dict['answer'] = isCorrect;
        let time = new Date();
        time = time - timer;
        time /= 1000;
        dict['time'] = time;
        dict['question_id'] = allQuestions[currentQuestionIndex].number_id
        dict['student_id'] = localStorage.getItem('student_id');
        let newList = results;
        newList.push(dict)
        setResults(newList)
        // set timer
        setTimer(new Date())
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < allQuestions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            //save result to DB
            // send results by post method
            // move to next text

            console.log(results);
            setTimer(new Date())
            setShowScore(true);
            send_info_on_text(results);
        }
    };

    let content = null


    if(allQuestions.length > 0)
    {
        content =
                <div className='app_question'>
                    {showScore ? (
                        <div className='score-section'>
                            <Button variant="warning" >You have finished this text. Click on me to continue</Button>
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
                                    <button className="button_question" onClick={() => handleAnswerOptionClick(answer_options.is_currect)}>{answer_options.answer_content}</button>
                                ))}
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

            <Button variant="primary" onClick={clear_question}>Clear! (only for now) </Button>
        </Container>

    )


}