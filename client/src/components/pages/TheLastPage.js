import React, {useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import './HomePage.css'
import {Link} from "react-router-dom";

export default function TheLastPage() {

    return (
        <Container className="w-80 center">

            <Row className="mt-5 justify-content-center align-items-center">
                <h1 className="block">Done!</h1>
            </Row>
            <Row className="justify-content-center align-items-center">
                <h2>Thank you for participate in our experiment</h2>
            </Row>
            <Row className="justify-content-center align-items-center">
                <Link to={"/"}>
                    <Button variant="outline-success" block size="lg">Return To Home Page</Button>
                </Link>
            </Row>


        </Container>
            )
}


