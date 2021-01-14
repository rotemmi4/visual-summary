// import React, { useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import { RegisterCard } from '../RegisterCard'
// import './LoginPage.css';
// import { useAuth } from '../../model/context/auth_context'
// import { CenteredModal } from '../CenteredModal';
//
//
// export function RegisterPage(){
//
//     const {register} = useAuth()
//     const [errorMessage,setErrorMessage] = useState("")
//     const [modalShow,setModalShow] = useState(false)
//     const [userInput, setUserInput] = useState({
//         username: "",
//         password: ""
//     })
//
//     const handleInputChange = (event) => {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
//
//         setUserInput(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     }
//
//     const handleRegister = () => {
//         if (userInput['username'] === '' || userInput['password'] === ''){
//             setErrorMessage("Username And Password must not be empty")
//             setModalShow(true)
//             return;
//         }
//         register(userInput)
//         setErrorMessage("Username already exist")
//         setModalShow(true)
//     }
//     return (
//         <Container className="fill-window align-items-center justify-content-center">
//             <Row className="">
//                 <Col>
//                     <RegisterCard handleRegister={handleRegister} handleInputChange={handleInputChange}/>
//                 </Col>
//             </Row>
//             <CenteredModal show={modalShow} onHide={() => setModalShow(false)} text={errorMessage}></CenteredModal>
//         </Container>
//     )
//
// }