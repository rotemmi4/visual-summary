import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import './HomePage.css'


export function VisualizationPage(){


    return (
        <>
            <Container>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other




                {/* <Row className="mt-5 justify-content-center align-items-center">
                    <h1 className="block">Home</h1>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <h2>Cloud for our precious family</h2>
                </Row> */}
            </Container>
            
        </>
    )



}
