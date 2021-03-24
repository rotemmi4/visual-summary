import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from "axios";
import {deleteQuestion, deleteText} from "../../model/requests/TextModelRestAPI";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {useParams} from "react-router-dom";


export default function DeleteQuestion() {



    const {register, handleSubmit} = useForm();
    const[que_id, setQue_id]= useState();
    const [text_id,setText_id] = useState()

    const texts = textRepository.useGetAllText()
    let text_questions = textRepository.useGetAllQuestionsById(text_id)

    const [modalShow,setModalShow] = useState(false)
    const [show, setShow] = useState(false);


    const reload=()=>window.location.reload();

    const handleClose = () => {
        setShow(false)
        reload();
    };

    const getTextById = (id) => {
        let filtered = texts.data.filter(text => text.id == id)
        return filtered.length > 0 ? filtered[0] : null;
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
                                { texts && texts.data ?
                                    <div>
                                        <select onChange={(e)=>{
                                            setText_id(parseInt(e.target.value))
                                            setQue_id(null)
                                        }}>
                                            <option disabled selected value hidden> -- select an option -- </option>
                                            {texts.data.map(text => (
                                                <option value={text.id}>{text.name}</option>
                                            ))}
                                        </select> {'    '}
                                        {text_id ?
                                            <>
                                                <Button onClick={(e) => {
                                                    setModalShow(true)
                                                }}>
                                                    Show Text
                                                </Button><br/><br/>
                                                <TextDisplayModal show={modalShow} onHide={() => {setModalShow(false)}} text={text_id}></TextDisplayModal>
                                            </> : null }
                                </div> : null }
                                {text_id && text_questions && text_questions.data ?
                                <div>
                                    <select onChange={(e)=>{
                                        setQue_id(parseInt(e.target.value))
                                    }}>
                                        <option disabled selected value hidden> -- select an option -- </option>
                                        {text_questions.data.map(question => (
                                            <option value={question.question_id}>{question.question_content}</option>
                                        ))}
                                    </select> {'    '}
                                    {que_id ?
                                    <Button onClick={(e)=>{
                                        deleteQuestion(que_id)
                                        handleShow()
                                    }}>
                                        Delete
                                    </Button> : null}

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
                                </div> : null}
                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}


