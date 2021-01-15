// import React, { useState } from 'react';
// import { MediaEditorForm } from '../MediaEditorForm';
// import { createMedia } from '../../repositories/MediaRepository';
// import { Col, Container, Form, Row } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
//
// export default function CreateTextPage() {
//
//     const history = useHistory()
//     const [state,setState] = useState({
//         type: "book"
//     })
//
//     const handleInputChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//         if (name == 'type'){
//             setState({
//                 'type': value,
//             });
//         }
//         else{
//             setState(prevState => ({
//                 ...prevState,
//                 [name]: value,
//             }));
//         }
//     }
//
//     const handleCancel = (event) => {
//         history.push('/create-test')
//     }
//
//     const handleSubmit = (event) => {
//         createMedia(state)
//         history.push('/create-test')
//     }
//
//     const optionControl = (<Form.Control
//             as="select"
//             name='type'
//             className="mr-sm-2"
//             id="inlineFormCustomSelect"
//             custom
//             value={state.type}
//             onChange={handleInputChange}
//         >
//             <option value="book">Book</option>
//             <option value="hd">Hard Drive</option>
//             <option value="music_album">Music Album</option>
//             <option value="picture_album">Pircute Album</option>
//         </Form.Control>)
//     return (
//     <>
//         <Container>
//         <h1 className="mb-3 text-center">Create Media</h1>
//             <Row className="justify-content-center">
//                 <Col></Col>
//                 <Col xs="9">
//                     <MediaEditorForm handleCancel={handleCancel} handleSubmit={handleSubmit} optionControl={optionControl} handleInputChange={handleInputChange} media={state}/>
//                 </Col>
//                 <Col></Col>
//             </Row>
//             </Container>
//     </>);
// }
