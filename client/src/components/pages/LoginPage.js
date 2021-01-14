import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LoginCard } from '../LoginCard'
import './LoginPage.css';
import { useAuth } from '../../model/context/auth_context'
import { VisualizationDisplayModal } from '../VisualizationDisplayModal';

export function LoginPage(){

    const {login} = useAuth()

    const [modalShow,setModalShow] = useState(false)

    const [userInput, setUserInput] = useState({
        username: "",
        password: ""
    })
    
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        setUserInput(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleLogin = () => {
        login(userInput)
        //setModalShow(true)
    }
    return (
        <Container className="fill-window align-items-center justify-content-center">
            <Row className="">
                <Col>
                    <LoginCard handleLogin={handleLogin} handleInputChange={handleInputChange}/>
                </Col>
            </Row>
            {/*<VisualizationDisplayModal show={modalShow} onHide={() => setModalShow(false)} text={"Username or Password are incorrect"}></VisualizationDisplayModal>*/}
        </Container>
    )


}