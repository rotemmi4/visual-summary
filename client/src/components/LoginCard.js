import React from 'react'
import { Button, Card, Col, Form, FormControl, InputGroup } from 'react-bootstrap'



export function LoginCard(props){

    
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="text-center">Login</Card.Title>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="username" onChange={props.handleInputChange} id="inlineFormInputGroup" placeholder="Username" />
                        </InputGroup>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs="auto">
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl name="password" onChange={props.handleInputChange} type="password" id="inlineFormInputGroup" placeholder="Password" />
                        </InputGroup>
                    </Col>
                </Form.Row>
            </Form>
            <Button className="mb-2" onClick={props.handleLogin} variant="primary" block>Login</Button>
        </Card.Body>
      </Card>
    )
    

}