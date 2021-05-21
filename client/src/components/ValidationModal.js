import React, {} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import "./Modal.css"


//style={{position: "absolute" , left: "10px"}}
export function ValidationModal(props) {
    const text = props.text



    return (
        <Modal
            {...props}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            dialogClassName="my-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Validation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Container>
                    <Col >
                        <text>The Test Don't Save!</text><br/>
                        <text style={{whiteSpace: "pre-line"}} >The Reason: {text}</text>
                    </Col>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}