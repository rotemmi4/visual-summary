// import React from 'react'
// import { Col, Form, Row } from 'react-bootstrap';
//
// export function BookEditor(props){
//
//     let media = props.media
//
//     return (
//
//         <>
//             {/* <Form.Row as={Row}>
//                 <Form.Label column sm="2">
//                 Email
//                 </Form.Label>
//                 <Col sm="10">
//                 <Form.Control plaintext readOnly defaultValue="email@example.com" />
//                 </Col>
//             </Form.Row> */}
//
//             <Row>
//                 <Form.Label column sm="2">Book Name</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="name" value={media.name} onChange={props.handleInputChange} placeholder="Name..." />
//                 </Col>
//             </Row>
//             <Row>
//                 <Form.Label column sm="2">Book Author</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="author" value={media.author} onChange={props.handleInputChange} placeholder="Author..." />
//                 </Col>
//             </Row>
//         </>
//
//     );
//
// }