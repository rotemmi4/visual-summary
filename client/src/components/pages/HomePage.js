import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HomePage.css'


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
            </Container>
            
        </>
    )



}