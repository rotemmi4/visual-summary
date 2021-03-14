import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import axios from "axios";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {addQuestion, uploadText} from "../../model/requests/TextModelRestAPI";


export default function AddQuestion() {


    const [dropdown, setDropdown] = useState([0]);
    const texts = textRepository.useGetAllText()
    const [modalShow,setModalShow] = useState([false])
    const [arr,setArr] = useState([0])
    const [ques_num,setques_num] = useState([0])
    const[name, setName]= useState("");


    return (
        <>
            <div className="container">
                <h2 className="mb-3 text-left">Add Question:</h2>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="mb-3 text-left">Add Question for Text:</h4>
                                <Form>
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

                                                                        setName(e.target.value);
                                                                    }} />
                                                                </Form.Group>

                                                                <Form.Group controlId="formBasicAnswer1">
                                                                    <Form.Label>Answer 1:</Form.Label>
                                                                    <Form.Control type="answer1" placeholder="Enter Answer 1 here" />
                                                                </Form.Group>
                                                                <Form.Group controlId="formBasicAnswer2">
                                                                    <Form.Label>Answer 2:</Form.Label>
                                                                    <Form.Control type="answer2" placeholder="Enter Answer 2 here" />
                                                                </Form.Group>
                                                                <Form.Group controlId="formBasicAnswer3">
                                                                    <Form.Label>Answer 3:</Form.Label>
                                                                    <Form.Control type="answer3" placeholder="Enter Answer 3 here" />
                                                                </Form.Group>
                                                                <Form.Group controlId="formBasicAnswer4">
                                                                    <Form.Label>Answer 4:</Form.Label>
                                                                    <Form.Control type="answer4" placeholder="Enter Answer 4 here" />
                                                                </Form.Group>

                                                            <h4 className="mb-3 text-left">Check the Correct Answer:</h4>
                                                            {['checkbox'].map((type) => (
                                                                          <div key={`custom-inline-${type}`} className="mb-3">
                                                                              <Form.Check
                                                                                  custom
                                                                                  inline
                                                                                  label="Answer 1"
                                                                                  type={type}
                                                                                  id={`custom-inline-${type}-1`}
                                                                              />
                                                                              <Form.Check
                                                                                  custom
                                                                                  inline
                                                                                  label="Answer 2"
                                                                                  type={type}
                                                                                  id={`custom-inline-${type}-2`}
                                                                              />
                                                                              <Form.Check
                                                                                  custom
                                                                                  inline
                                                                                  label="Answer 3"
                                                                                  type={type}
                                                                                  id={`custom-inline-${type}-3`}
                                                                              />
                                                                              <Form.Check
                                                                                  custom
                                                                                  inline
                                                                                  label="Answer 4"
                                                                                  type={type}
                                                                                  id={`custom-inline-${type}-4`}
                                                                              />
                                                                          </div>
                                                                      ))}
                                                            <Button onClick={(e)=>{
                                                                addQuestion(ques_num(ques_num+1), arr, name)
                                                            }}>Save</Button>
                                                        </>
                                                    )
                                                })
                                        }
                                </Form>
                    </div>
                </div>
            </div>

            </>);
}