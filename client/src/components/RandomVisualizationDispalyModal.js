import "./Modal.css"
import * as textRepository from "../repositories/TextRepository";
import React, {} from "react";
import {Button, Col, Container, Modal} from "react-bootstrap";
import {TextVisualization} from "./TextVisualization";


export function RandomVisualizationDisplayModal(props) {
    const id = props.text
    const visualization= props.visualization
    const text1 = textRepository.useGetTextWeights(id)



    let colR="255",colG="255",colB="255"
    if(visualization == "Gradual Highlight" || visualization == "Highlight" ){
        let value=props.propertyValue
        colR = typeof value==="string" ?value.split(',')[0]:""
        colG = typeof value==="string" ?value.split(',')[1]:""
        colB = typeof value==="string" ?value.split(',')[2]:""
        //setColorR("0")
        // setColorG(color[1])
        // setColorB(color[2])
    }




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
                <Modal.Title id="contained-modal-title-vcenter">Visualization: {visualization}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Col >
                        <p>Threshold: {props.threshold}</p><br/>
                        {text1 && text1.data ? <TextVisualization sentences={text1.data.sentences} type={visualization} /*type={type}*/ name={text1.data.name} selectColorR={colR} selectColorG={colG} selectColorB={colB} threshold={props.threshold}/> : null}
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