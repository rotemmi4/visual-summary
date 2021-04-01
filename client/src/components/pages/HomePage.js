import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './HomePage.css'
import {Link} from "react-router-dom";

export function HomePage(){


    return (
        <>
            <Container>
                <Row className="mt-5 justify-content-center align-items-center">
                    <h1 className="block">Welcome</h1>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <h2>Visualization Summary Platform</h2>
                </Row>

                <Row className="justify-content-center align-items-center">
                    <Link to={"/StudentEntrance"}>
                        <Button variant="outline-success" block size="lg">Start Test!</Button>
                    </Link>
                </Row>
            </Container>
            
        </>
    )



}