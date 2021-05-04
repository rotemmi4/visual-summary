import React, {useState} from 'react';
import {Button, Container, Form, Modal, Row} from 'react-bootstrap';
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {addQuestion} from "../../model/requests/TextModelRestAPI";


export default function AddQuestion() {

    const texts = textRepository.useGetAllText()
    const [modalShow,setModalShow] = useState(false)
    const [textId, setTextId] = useState()

    const [questionContent, setQuestionContent] = useState("")
    const [answer1, setAnswer1]= useState("");
    const [answer2, setAnswer2]= useState("");
    const [answer3, setAnswer3]= useState("");
    const [answer4, setAnswer4]= useState("");

    const [checkbox1, setCheckbox1]= useState(false);
    const [checkbox2, setCheckbox2]= useState(false);
    const [checkbox3, setCheckbox3]= useState(false);
    const [checkbox4, setCheckbox4]= useState(false);

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
                                    <select defaultValue={-1} onChange={(e)=>setTextId(parseInt(e.target.value))}>
                                        <option disabled value={-1} hidden> -- select an option -- </option>
                                        {texts && texts.data ? texts.data.map(text => (
                                            <option key={text.id} value={text.id}>{text.name}</option>
                                        )) : null}
                                    </select>
                                    {'    '}
                                    <Button onClick={(e)=>{setModalShow(true)}}>Show Text</Button>
                                    <br/><br/>

                                    {textId ?
                                        <div>
                                            <TextDisplayModal show={modalShow} onHide={() => {setModalShow(false)}} text={textId}/>

                                            <Form.Group controlId="formBasicQuestion">
                                                <Form.Label>Question:</Form.Label>
                                                <Form.Control type="question" placeholder="Enter the Question here" name='question' onChange={(e)=>{
                                                    setQuestionContent(e.target.value);
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
                                              setCheckbox1(true);
                                          }}
                                           />
                                      <Form.Check
                                          type="radio"
                                          name="formHorizontalRadios"
                                          id="formHorizontalRadios2"
                                          inline
                                          label="Answer 2"
                                          onChange={(e)=>{
                                              setCheckbox2(true);
                                          }}
                                      />
                                      <Form.Check
                                          type="radio"
                                          name="formHorizontalRadios"
                                          id="formHorizontalRadios3"
                                          inline
                                          label="Answer 3"
                                          onChange={(e)=>{
                                              setCheckbox3(true);
                                          }}
                                      />
                                      <Form.Check
                                          type="radio"
                                          name="formHorizontalRadios"
                                          id="formHorizontalRadios4"
                                          inline
                                          label="Answer 4"
                                          onChange={(e)=>{
                                              setCheckbox4(true);
                                          }}
                                      />
                                        <br></br><br></br>

                                        { questionContent.length > 0 && answer1.length > 0 && answer2.length > 0 &&
                                        answer3.length > 0 && answer4.length > 0
                                        && (checkbox1 || checkbox2 || checkbox3 || checkbox4) ?
                                            <Button onClick={(e) => {
                                                handleShow()
                                                let ansDict = {
                                                    '1': {'isCorrect': checkbox1, 'content': answer1},
                                                    '2': {'isCorrect': checkbox2, 'content': answer2},
                                                    '3': {'isCorrect': checkbox3, 'content': answer3},
                                                    '4': {'isCorrect': checkbox4, 'content': answer4}
                                                }
                                                addQuestion(textId, questionContent, ansDict)
                                            }}>Save</Button>
                                        : null }
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
                                        </div>
                                     : null}
                                </div>
                            </Form>
                    </div>
                </div>
            </Container>
        </>);
}