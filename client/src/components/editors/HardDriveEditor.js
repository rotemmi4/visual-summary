import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';

export function HardDriveEditor(props){


    let media = props.media

    return (

        <>
            {/* <Form.Row as={Row}>
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>
            </Form.Row> */}

            <Row>
                <Form.Label column sm="2">HD Name</Form.Label>
                <Col sm="10">
                    <Form.Control name="name" value={media.name} onChange={props.handleInputChange} placeholder="Name..." />
                </Col>
            </Row>
            <Row>
                <Form.Label column sm="2">HD Belong</Form.Label>
                <Col sm="10">
                    <Form.Control name="belong" value={media.belong} onChange={props.handleInputChange} placeholder="Belong..." />
                </Col>
            </Row>
        </>

    );

}