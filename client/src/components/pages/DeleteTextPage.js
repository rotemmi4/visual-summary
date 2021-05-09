import React, { useState } from 'react';
import {Button, Container, Form, Modal} from 'react-bootstrap';
import {deleteText} from "../../model/requests/TextModelRestAPI";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";


export default function DeleteText() {

    const [textId, setTextId] = useState()
    const [modalShow,setModalShow] = useState(false)
    const texts = textRepository.useGetAllText()
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
                <h2 className="mb-3 text-left">Delete Text</h2> <br/><br/>
                        <div>
                            <Form>
                                <h4 className="mb-3 text-left">Choose Text Name:</h4> <br/><br/>
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
                                            <Button onClick={(e)=>{
                                                deleteText(textId)
                                                setShow(true)
                                            }}>
                                                Delete
                                            </Button>
                                        </div> : null}

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
                                            text deleted!
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