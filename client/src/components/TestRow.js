import React , {useState} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {DeleteTestModal} from "./DeleteTestModal";



export function TestRow(props){
    const testName = props.testName
    const testType = props.testType

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    let EditLink
    if(testType=="\"Choose Tests And Visualizations\""){
       EditLink=<Link  className="btn btn-light" to={{pathname:"/ShowTest", state:{type: "edit", testName: testName, testType:"ChooseTextsAndVisualizations"}}} >Show Test</Link>
    }else if(testType=="\"Generate Random Texts And Choose Visualizations\""){
        EditLink=<Link  className="btn btn-light" to={{pathname:"/ShowTest", state:{type: "edit", testName: testName, testType:"GenerateRandomTextsAndChooseVisualizations"}}} >Show Test</Link>
    }else{
        EditLink=<Link className="btn btn-light" to={{pathname:"/ShowTest", state:{type: "edit", testName: testName, testType:"GenerateRandomTextsAndRandomVisualizations"}}} >Show Test</Link>
    }



    return (
        <div>
            <Row>
                <Col><text>{testName}</text></Col>
                <Col>
                    {EditLink}
                    <Button variant="light" onClick={handleShow}>Delete</Button>
                    <DeleteTestModal show={show} onHide={handleClose} name={testName}></DeleteTestModal>
                </Col>
                <Col></Col><Col></Col><Col></Col>
        </Row>
        </div>
    )
}