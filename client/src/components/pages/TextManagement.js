import React, { useState } from 'react';
import {Button, Container, Modal, Form} from 'react-bootstrap';
import {uploadText} from "../../model/requests/TextModelRestAPI";
import { AddTextModal } from '../AddTextModal';



export default function TextManagement() {

    const [content, setContent]= useState("");
    const [name, setName]= useState("");
    const [modalShow,setModalShow] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setModalShow(false)

    };
    const handleShow = () => setModalShow(true);


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
                        <div>
                            <Form>
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
                                <Modal
                                    show={modalShow}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>add text</Modal.Title>
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
                            </Form>
                        </div>
            </Container>
        </>);
}


