// import React, {useState} from 'react'
// import { Button, Col, Form } from 'react-bootstrap';
// import MediaEditorFactory from './MediaEditorFactory'
//
// export function MediaEditorForm(props){
//
//
//     //better composition that factory
//     const optionControl = props.optionControl;
//     const handleInputChange = props.handleInputChange;
//
//     return (
//         <Form>
//             <Form.Row className="align-items-center">
//                 <Col xs="auto" className="my-1">
//                     <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
//                         Choose Type
//                     </Form.Label>
//                     {optionControl}
//                 </Col>
//             </Form.Row>
//             <Form.Row>
//                 <Col xs="auto" className="my-1">
//                     <MediaEditorFactory component={props.media} mediaType={props.media.type} handleInputChange={handleInputChange} props/>
//                 </Col>
//             </Form.Row>
//             <Form.Row>
//                 <Col xs="auto" className="my-1">
//                     <Button onClick={props.handleSubmit} variant="primary" block>Submit</Button>
//                 </Col>
//                 <Col xs="auto" className="my-1">
//                     <Button onClick={props.handleCancel} variant="light" block>Cancel</Button>
//                 </Col>
//             </Form.Row>
//         </Form>
//
//     );
//
//
// }