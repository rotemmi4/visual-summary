import React, {useState} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import {TextVisualization} from "./TextVisualization";
import * as textRepository from "../repositories/TextRepository";
import "./Modal.css"


export function TextDisplayModal(props) {
    const id = props.text

    const text1 = textRepository.useGetTextWeights(id)
    const [type, setType] = useState("Without Visualization");

    const [propertyName, setPropertyName] = useState("none");
    const [propertyValue, setPropertyValue] = useState("none");
    const [propertyType, setPropertyType] = useState("none");

    let onButtonClick = function(event){
        textRepository.save(type,id,propertyName,propertyValue,propertyType)
        props.onHide()
    }

    return (
        <Modal
            {...props}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            dialogClassName="my-modal"

        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Col >
                        {text1 && text1.data ? <TextVisualization sentences={text1.data.sentences} type={type} /*type={type}*/ name={text1.data.name} showBar={true}/> : null}
                    </Col>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}