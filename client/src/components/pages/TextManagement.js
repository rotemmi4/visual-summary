import React, { useState } from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from "axios";
import {deleteText, uploadText} from "../../model/requests/TextModelRestAPI";
import {TextDisplayModal} from "../TextDisplayModel";


export default function TextManagement() {

    const[flag, setFlag]= useState(false)
    const {register, handleSubmit} = useForm();
    const[content, setContent]= useState("");
    const[name, setName]= useState("");
    const [modalShow,setModalShow] = useState([false])
    const [show, setShow] = useState(false);
    const reload=()=>window.location.reload();
    const handleClose = () => {
        setShow(false)
        setModalShow(false)
    };
    const handleShow = () => setShow(true);


    const onChange = (e) => {
        const file = e.target.files[0];
        file.text().then( filetext => {
            setContent(filetext.replace(/(\r\n|\n|\r)/gm, " "));
        }).catch( (e) => {
            console.log("")
        })
    };

    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Upload Text</h2> <br/><br/>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs="9">
                        <div>
                            <form onSubmit={handleSubmit(onsubmit)}>
                              <h4 className="mb-3 text-left">Text Name:</h4>
                               <p><input type='text' placeholder='enter text name' name= 'name' onChange={(e)=>{

                                   setName(e.target.value);
                               }} /></p><br/><br/>

                                <h4 className="mb-3 text-left">Upload Text:</h4>
                               <input type="file" required name="file" onChange={onChange}/> <br/><br/>

                                <div>
                                    <Button onClick={(e)=>{
                                        setFlag(!flag)
                                    }}> {flag?"Hide Text" : "Show Text"}</Button> <br/><br/>
                                </div>
                                <div>
                                    {flag && content}
                                </div>



                                <Button variant="primary" onClick={(e)=>{

                                    uploadText(name, content)
                                    handleShow()
                                }}>Save</Button>

                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        text added!
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>




                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}


