import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import * as testRepository from "../repositories/TestRepository";
// import {TextVisualization} from "./TextVisualization";
// import * as textRepository from "../repositories/TextRepository";
// import "./Modal.css"


//style={{position: "absolute" , left: "10px"}}
export function DeleteTestModal(props) {
    const reload=()=>window.location.reload();

    let onButtonClick = function(event){
        testRepository.delete_test(props.name)
        props.onHide()
        reload()
    }

    return (
        <Modal
            {...props}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            dialogClassName="my-modal"

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Delete {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete this test?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button   onClick={(e)=>{onButtonClick(props) }} >Delete</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}