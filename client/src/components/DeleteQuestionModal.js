import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import {TextVisualization} from "./TextVisualization";
import * as textRepository from "../repositories/TextRepository";
import "./Modal.css"


//style={{position: "absolute" , left: "10px"}}
export function DeleteQuestionModal(props) {
    const handleClose= props.handleClose
    const show= props.show


    return (
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
    );
}