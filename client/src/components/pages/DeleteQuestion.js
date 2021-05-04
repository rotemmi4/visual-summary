import React, {useState} from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import {deleteQuestion} from "../../model/requests/TextModelRestAPI";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";
import {QuestionsDropdown} from "../QuestionsDropdown";
import {DeleteQuestionModal} from "../DeleteQuestionModal";


export default function DeleteQuestion() {



    const {register, handleSubmit} = useForm();
    const [textId,setTextId] = useState()
    const [questionId, setQuestionId]= useState();
    const texts = textRepository.useGetAllText()

    const [modalShow,setModalShow] = useState(false)
    const [show, setShow] = useState(false);


    const reload=()=>window.location.reload();

    const handleClose = () => {
        setShow(false)
        reload();
    };

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
                                        <select defaultValue={-1} onChange={(e)=>{
                                            setTextId(parseInt(e.target.value))
                                        }}>
                                            <option disabled value={-1} hidden> -- select an option -- </option>
                                            {texts.data.map(text => (
                                                <option key={text.id} value={text.id}>{text.name}</option>
                                            ))}
                                        </select> {'    '}
                                        {textId ?
                                            <>
                                                <Button onClick={(e) => {
                                                    setModalShow(true)
                                                }}>
                                                    Show Text
                                                </Button><br/><br/>
                                                <TextDisplayModal show={modalShow} onHide={() => {setModalShow(false)}} text={textId}></TextDisplayModal>
                                            </> : null }
                                </div> : null }
                                {textId  ?
                                <div>
                                    <QuestionsDropdown text_id={textId} setQuestionId={setQuestionId}/>
                                    {questionId ?
                                        <Button onClick={(e)=>{
                                            deleteQuestion(questionId)
                                            setShow(true)
                                        }}>
                                            Delete
                                        </Button> : null}
                                    <DeleteQuestionModal show={show} handleClose={handleClose} ></DeleteQuestionModal>
                                </div> : null}
                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}

