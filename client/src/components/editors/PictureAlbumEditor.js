// import React from 'react'
// import { Col, Form, Row } from 'react-bootstrap';
//
// export function PictureAlbumEditor(props){
//
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
//                 <Form.Label column sm="2">Picture Album Name</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="name" value={media.name} onChange={props.handleInputChange} placeholder="Name..." />
//                 </Col>
//             </Row>
//             <Row>
//                 <Form.Label column sm="2">Picture Album Location</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="location" value={media.location} onChange={props.handleInputChange} placeholder="location..." />
//                 </Col>
//             </Row>
//             <Row>
//                 <Form.Label column sm="2">Picture Album Date</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="date" value={media.date} onChange={props.handleInputChange} placeholder="Date..." />
//                 </Col>
//             </Row>
//         </>
//
//     );
//
// }