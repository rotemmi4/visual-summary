import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import axios from "axios";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {addQuestion, addAnswers} from "../../model/requests/TextModelRestAPI";


export default function AddQuestion() {

    const [count, setCount] =useState(0)

    useEffect(() => {
        const parsedCount = Number(localStorage.getItem("count") || 0)
        setCount(parsedCount)
    }, [])

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])


    const [dropdown, setDropdown] = useState([0]);
    const texts = textRepository.useGetAllText()
    const [modalShow,setModalShow] = useState([false])
    const [arr,setArr] = useState([0])
    const [ques_num,setQues_num] = useState([0])
    const[que_content, setQue_content]= useState("");

    const[answer1, setAnswer1]= useState("");
    const[answer2, setAnswer2]= useState("");
    const[answer3, setAnswer3]= useState("");
    const[answer4, setAnswer4]= useState("");

    const[checkbox1, setCheckbox1]= useState("false");
    const[checkbox2, setCheckbox2]= useState("false");
    const[checkbox3, setCheckbox3]= useState("false");
    const[checkbox4, setCheckbox4]= useState("false");

    const questionId = textRepository.useGetQuestionId()


    return (
        <>
            <Container>
               <h2 className="mb-3 text-left">Add Question:</h2>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="mb-3 text-left">Add Question for Text:</h4>
                            <Form>
                                <div>
                                    {
                                        dropdown.map((value, index) => {
                                            return (
                                                <>
                                                    <select value={dropdown[index]} onChange={(e)=>{
                                                        setArr([...dropdown])
                                                        arr[index] = parseInt(e.target.value)
                                                        setDropdown(arr)
                                                    }}>
                                                        {texts && texts.data ? texts.data.map(text => (
                                                            <option value={text.id}>{text.name}</option>
                                                        )) : null}
                                                    </select> {'    '}<Button onClick={(e)=>{
                                                    setArr([...dropdown])
                                                    arr[index] = true
                                                    setModalShow(arr)
                                                }}>Show Text</Button><br/><br/>

                                                    <TextDisplayModal show={modalShow[index]} onHide={() => {
                                                        setArr([...dropdown])
                                                        arr[index] = false
                                                        setModalShow(arr)
                                                    }} text={dropdown[index]}></TextDisplayModal>

                                                    <Form.Group controlId="formBasicQuestion">
                                                            <Form.Label>Question:</Form.Label>
                                                            <Form.Control type="question" placeholder="Enter the Question here" name= 'question' onChange={(e)=>{
                                                                setQue_content(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicAnswer1">
                                                            <Form.Label>Answer 1:</Form.Label>
                                                            <Form.Control type="answer1" placeholder="Enter Answer 1 here" onChange={(e)=>{
                                                                setAnswer1(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicAnswer2">
                                                            <Form.Label>Answer 2:</Form.Label>
                                                            <Form.Control type="answer2" placeholder="Enter Answer 2 here" onChange={(e)=>{
                                                                setAnswer2(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicAnswer3">
                                                            <Form.Label>Answer 3:</Form.Label>
                                                            <Form.Control type="answer3" placeholder="Enter Answer 3 here" onChange={(e)=>{
                                                                setAnswer3(e.target.value);
                                                            }} />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicAnswer4">
                                                            <Form.Label>Answer 4:</Form.Label>
                                                            <Form.Control type="answer4" placeholder="Enter Answer 4 here" onChange={(e)=>{
                                                                setAnswer4(e.target.value);
                                                            }} />
                                                        </Form.Group>

                                                    <h4 className="mb-3 text-left">Check the Correct Answer:</h4>
                                                  <Form.Check
                                                      type="radio"
                                                      name="formHorizontalRadios"
                                                      id="formHorizontalRadios1"
                                                      inline
                                                      label="Answer 1"
                                                      onChange={(e)=>{
                                                          setCheckbox1("true");
                                                      }}
                                                       />
                                                  <Form.Check
                                                      type="radio"
                                                      name="formHorizontalRadios"
                                                      id="formHorizontalRadios2"
                                                      inline
                                                      label="Answer 2"
                                                      onChange={(e)=>{
                                                          setCheckbox2("true");
                                                      }}
                                                  />
                                                  <Form.Check
                                                      type="radio"
                                                      name="formHorizontalRadios"
                                                      id="formHorizontalRadios3"
                                                      inline
                                                      label="Answer 3"
                                                      onChange={(e)=>{
                                                          setCheckbox3("true");
                                                      }}
                                                  />
                                                  <Form.Check
                                                      type="radio"
                                                      name="formHorizontalRadios"
                                                      id="formHorizontalRadios4"
                                                      inline
                                                      label="Answer 4"
                                                      onChange={(e)=>{
                                                          setCheckbox4("true");
                                                      }}
                                                  />
                                                    <br></br><br></br>



                                                    {questionId && questionId.data ? questionId.data.map(question => (
                                                        <Button onClick={(e)=>{



                                                            addQuestion(dropdown[index], que_content)

                                                            console.log(questionId.data)

                                                            addAnswers(1, question.queId+1, dropdown[index], checkbox1, answer1)
                                                            addAnswers(2, question.queId+1, dropdown[index], checkbox2, answer2)
                                                            addAnswers(3, question.queId+1, dropdown[index], checkbox3, answer3)
                                                            addAnswers(4, question.queId+1, dropdown[index], checkbox4, answer4)

                                                        }}>Save</Button>

                                                    )) : null}


                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </Form>
                    </div>
                </div>
            </Container>
        </>);
}