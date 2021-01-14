// import React, { useEffect, useState } from 'react';
// import { MediaEditorForm } from '../MediaEditorForm';
// import { useGetMediaById, editMedia } from '../../repositories/MediaRepository'
// import { Col, Container, Form, Row } from 'react-bootstrap';
// import { useHistory, useParams } from 'react-router-dom';
// import { VisualizationDisplayModal } from '../VisualizationDisplayModal';
//
// export default function EditTestPage() {
//
//     const { id } = useParams()
//     const history = useHistory()
//     const [state, setState] = useState({type: "book"})
//     const media = useGetMediaById(id)
//     const [errorMessage,setErrorMessage] = useState("")
//     const [modalShow,setModalShow] = useState(false)
//
//     const handleInputChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//
//         setState(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     }
//
//     const handleCancel = (event) => {
//         history.push('/media')
//     }
//     const handleSubmit = (event) => {
//         editMedia(state).then(function(data){
//             history.push('/media')
//         }).catch(err => {
//             setErrorMessage("Some one else updating the media")
//             setModalShow(true)
//         })
//     }
//
//     useEffect(() => {
//         if (media.data != null)
//             setState(media.data)
//         },[media.data]
//     )
//
//     let content = null
//     if (media.error) {
//         content = <div>there was a problem while loading the page</div>
//     } else if (media.loading) {
//         content = <div>loading media items</div>
//     } else if (media.data != null) {
//         const optionControl = (<Form.Control
//             as="select"
//             name='type'
//             className="mr-sm-2"
//             id="inlineFormCustomSelect"
//             custom
//             disabled
//             value={state.type}
//         >
//             <option value="book">Book</option>
//             <option value="hd">Hard Drive</option>
//             <option value="music_album">Music Album</option>
//             <option value="picture_album">Picture Album</option>
//         </Form.Control>)
//         content = (
//             <Container>
//                 <h1 className="mb-3 text-center">Edit Media</h1>
//                 <Row className="justify-content-center">
//                     <Col></Col>
//                     <Col xs="9">
//                         <MediaEditorForm handleSubmit={handleSubmit} handleCancel={handleCancel} optionControl={optionControl} handleInputChange={handleInputChange} media={state}/>
//                     </Col>
//                     <Col></Col>
//                 </Row>
//                 <VisualizationDisplayModal show={modalShow} onHide={() => setModalShow(false)} text={errorMessage}></VisualizationDisplayModal>
//             </Container>
//         )
//     }
//     else{
//         content = <div>there is no such item</div>
//     }
//
//     return (
//     <>
//         {content}
//     </>);
// }
