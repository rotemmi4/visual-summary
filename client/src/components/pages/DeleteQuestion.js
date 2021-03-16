import React, { useState } from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from "axios";
import {deleteQuestion, deleteText} from "../../model/requests/TextModelRestAPI";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {useParams} from "react-router-dom";


export default function DeleteQuestion() {

    let questionsById

    const {register, handleSubmit} = useForm();
    const[content, setContent]= useState("");
    const [text_id,setText_id] = useState(1)

    const [dropdown, setDropdown] = useState([0]);
    const texts = textRepository.useGetAllText()
    const text_questions = textRepository.useGetAllQuestionsById(text_id)
    const [modalShow,setModalShow] = useState([false])
    const [arr,setArr] = useState([0])
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
                <h2 className="mb-3 text-left">Delete Question</h2> <br/><br/>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs="9">
                        <div>
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <h5 className="mb-3 text-left">Choose Text Name:</h5>

                                <div>
                                    {
                                        dropdown.map((value, index) => {
                                            return (
                                                <>
                                                    <select value={dropdown[index]} onChange={(e)=>{
                                                        setArr([...dropdown])
                                                        arr[index] = parseInt(e.target.value)
                                                        setDropdown(arr)
                                                        setText_id(arr[index])
                                                    }}>
                                                        {texts && texts.data ? texts.data.map(text => (
                                                            <option value={text.id}>{text.name}</option>
                                                        )) : null}
                                                    </select> {'    '}
                                                    <Button onClick={(e)=>{
                                                    setArr([...dropdown])
                                                    arr[index] = true
                                                    setText_id(dropdown[index])
                                                    setModalShow(arr)}}>
                                                        Show Text
                                                    </Button><br/><br/>

                                                    <TextDisplayModal show={modalShow[index]} onHide={() => {
                                                        setArr([...dropdown])
                                                        arr[index] = false
                                                        setModalShow(arr)
                                                    }} text={dropdown[index]}></TextDisplayModal>
                                                    <br></br>

                                                   <select onChange={(e)=>{
                                                        setArr([...dropdown])
                                                        arr[index] = parseInt(e.target.value)
                                                        setDropdown(arr)

                                                    }}>
                                                        {text_id && text_questions && text_questions.data ? text_questions.data.map(question => (
                                                            <option value={question.question_id}>{question.question_content}</option>
                                                        )) : null}
                                                    </select>{'    '}

                                                    <Button variant="primary" onClick={(e)=>{
                                                        deleteQuestion(Que_id)
                                                        handleShow()
                                                    }}>Delete</Button>

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
                                                            Question Deleted!
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
                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}