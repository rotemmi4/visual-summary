import React from 'react'
import {Button, Form, Container, Row} from 'react-bootstrap'
import {Link} from "react-router-dom";


export function StudentEntrance(props){

    return (
        <Container className="w-80 center">

            <Row className="mb-3 justify-content-center align-items-center">
                <h2 className="block">Please fill the information about you</h2>
            </Row>

            <Form className="center">
              <Form.Group >
                <Form.Label>Student ID</Form.Label>
                <Form.Control placeholder="ID..." name="studentID" onChange={props.handleInputChange}/>
              </Form.Group>

              <Form.Group >
                <Form.Label>Student Name</Form.Label>
                <Form.Control placeholder="Name..." name="studentName" onChange={props.handleInputChange}/>
              </Form.Group>

              <Form.Group >
                <Form.Label>Student Age</Form.Label>
                <Form.Control placeholder="Age..."  name="studentAge" onChange={props.handleInputChange}/>
              </Form.Group>

              <Form.Label>Student Gender</Form.Label>
              <Form.Control as="select"  name="studentGender" onChange={props.handleInputChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>

              <br/>
              <Link to={"/StudentExplanation"}>
                  <Button variant="outline-primary" block size="lg"  onClick={props.handleStudentInfo}>
                    Ok, Lets Start!
                       {/*(explanation)!*/}
                  </Button>
              </Link>

            </Form>

        </Container>

    )


}