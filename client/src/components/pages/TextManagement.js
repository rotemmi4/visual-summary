import React, { useState } from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from "axios";
import {deleteText, uploadText} from "../../model/requests/TextModelRestAPI";
import { AddTextModal } from '../AddTextModal';



export default function TextManagement() {

    const[flag, setFlag]= useState(false)
    const {register, handleSubmit} = useForm();
    const[content, setContent]= useState("");
    const[name, setName]= useState("");
    const [modalShow,setModalShow] = useState([false])
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
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

                                <Button variant="primary" onClick={(e)=>{

                                    setShow(true)
                                }}>Show Content</Button>

                                <AddTextModal show={show} onHide={() => {
                                    setShow(false)
                                }} text={content}></AddTextModal><br/><br/>



                                <Button variant="primary" onClick={(e)=>{

                                    uploadText(name, content)
                                    handleShow()
                                }}>Save</Button>



                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}


