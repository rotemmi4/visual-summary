// import React from 'react'
// import { Col, Form, Row } from 'react-bootstrap';
//
// export function MusicAlbumEditor(props){
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
//                 <Form.Label column sm="2">Music Album Name</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="name" value={media.name} onChange={props.handleInputChange} placeholder="Name..." />
//                 </Col>
//             </Row>
//             <Row>
//                 <Form.Label column sm="2">Music Album Release Date</Form.Label>
//                 <Col sm="10">
//                     <Form.Control name="release_date" value={media.release_date} onChange={props.handleInputChange} placeholder="Release Date..." />
//                 </Col>
//             </Row>
//         </>
//
//     );
//
// }