import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";



export function TestRow(props){
    const testName = props.testName
    const testType = props.testType
    let EditLink
    if(testType=="Choose Tests And Visualizations"){
       EditLink=<Link to="/ChooseTextsAndVisualizations" className="btn btn-light" >Edit</Link>
    }else if(testType=="Generate Random Texts And Choose Visualizations"){
        EditLink=<Link to="/GenerateRandomTextsAndChooseVisualizations" className="btn btn-light" >Edit</Link>
    }else{
        EditLink=<Link to="/GenerateRandomTextsAndRandomVisualizations" className="btn btn-light" >Edit</Link>
    }



    return (
        <div>
            <Row>
                <Col><text>{testName}</text></Col>
                <Col>
                    {EditLink}
                    <Button variant="light">Delete</Button>
                </Col>
                <Col></Col><Col></Col><Col></Col>
        </Row>
        </div>
    )
}