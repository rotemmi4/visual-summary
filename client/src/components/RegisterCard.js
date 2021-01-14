// import React from 'react'
// import { Button, Card, Col, Form } from 'react-bootstrap'
//
//
// export function RegisterCard(props){
//
//     return (
//         <Card style={{ width: '35rem' }}>
//         <Card.Body>
//             <Card.Title className="text-center">Register</Card.Title>
//             <Form>
//                 <Form.Row className="mb-2">
//                     <Form.Label column lg={2}>Username</Form.Label>
//                     <Col>
//                         <Form.Control onChange={props.handleInputChange} name="username" type="text" placeholder="Username" />
//                     </Col>
//                 </Form.Row>
//                 <Form.Row className="mb-2">
//                     <Form.Label column lg={2}>Password</Form.Label>
//                     <Col>
//                         <Form.Control onChange={props.handleInputChange} name="password" type="password" placeholder="Password" />
//                     </Col>
//                 </Form.Row>
//                 <Form.Row className="mb-2">
//                     <Form.Label column lg={2}>First name</Form.Label>
//                     <Col>
//                         <Form.Control onChange={props.handleInputChange} name="firstname" type="text" placeholder="First name" />
//                     </Col>
//                 </Form.Row>
//                 <Form.Row className="mb-4">
//                     <Form.Label column lg={2}>Last Name</Form.Label>
//                     <Col>
//                         <Form.Control onChange={props.handleInputChange} name="lastname" type="text" placeholder="Last Name" />
//                     </Col>
//                 </Form.Row>
//                 <Button onClick={props.handleRegister} variant="primary" block>Register</Button>
//             </Form>
//             </Card.Body>
//         </Card>
//     )
//
// }