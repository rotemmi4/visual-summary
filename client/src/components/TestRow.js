import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';



export function TestRow(props){
    const testName = props.testName



    return (
        <div>
            <Row>
                <Col><text>{testName}</text></Col>
                <Col>
                    <Button variant="light"  position="absolute" right="15px" >Edit</Button>
                    <Button variant="light">Delete</Button>
                </Col>
                <Col></Col><Col></Col><Col></Col>
        </Row>
        </div>
    )
}