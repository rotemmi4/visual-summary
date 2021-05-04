import React, {} from 'react'
import {Button, Container, Modal, Row, Col} from 'react-bootstrap';
import "./Modal.css"


//style={{position: "absolute" , left: "10px"}}
export function AddTextModal(props) {
    const text_content = props.text



    return (
        <Modal
            {...props}
            aria-labelledby="example-custom-modal-styling-title"
            size="xl"
            dialogClassName="my-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Col >
                        {text_content}
                    </Col>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}