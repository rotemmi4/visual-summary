import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import axios from "axios";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {addQuestion, addAnswers} from "../../model/requests/TextModelRestAPI";


export default function AddQuestion() {

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

    const [show, setShow] = useState(false);
    const reload=()=>window.location.reload();

    const handleClose = () => {
        setShow(false)
        reload();
    };

    const handleShow = () => setShow(true);


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

                                                        <Button onClick={(e)=>{
                                                            handleShow()
                                                            let ansDict= {
                                                                '1': {'isCorrect': checkbox1, 'content': answer1},
                                                                '2': {'isCorrect': checkbox2, 'content': answer2},
                                                                '3': {'isCorrect': checkbox3, 'content': answer3},
                                                                '4': {'isCorrect': checkbox4, 'content': answer4}
                                                            }
                                                            addQuestion(dropdown[index], que_content, ansDict)
                                                        }}>Save</Button>

                                                    <Modal
                                                        show={show}
                                                        onHide={handleClose}
                                                        backdrop="static"
                                                        keyboard={false}
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Message</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            Question Added!
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                Close
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
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