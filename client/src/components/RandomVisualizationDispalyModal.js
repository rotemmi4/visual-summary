import "./Modal.css"
import * as textRepository from "../repositories/TextRepository";
import React, {useState} from "react";
import {Button, Col, Container, Modal} from "react-bootstrap";
import {TextVisualization} from "./TextVisualization";


export function RandomVisualizationDisplayModal(props) {
    const id = props.text
    const visualization= props.visualization
    const text1 = textRepository.useGetTextWeights(id)


    const [propertyName, setPropertyName] = useState("none");
    const [propertyValue, setPropertyValue] = useState("none");
    const [propertyType, setPropertyType] = useState("none");

    let onButtonClick = function(event){
        // textRepository.save(visualization,id,propertyName,propertyValue,propertyType)
        // props.onHide()
    }

    return (
        <Modal
            {...props}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            dialogClassName="my-modal"

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Visualization
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Col >
                        {text1 && text1.data ? <TextVisualization sentences={text1.data.sentences} type={visualization} /*type={type}*/ name={text1.data.name}/> : null}
                    </Col>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                {/*<Button  onClick={(e)=>{onButtonClick() }} href={''}>Save</Button>*/}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}