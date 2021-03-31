import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
// import {TextVisualization} from "./TextVisualization";
// import * as textRepository from "../repositories/TextRepository";
// import "./Modal.css"


//style={{position: "absolute" , left: "10px"}}
export function DeleteTestModal(props) {


    return (
        <Modal
            {...props}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            dialogClassName="my-modal"

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Delete Test
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this test?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button  >Delete</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}