import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from "axios";
import {deleteText} from "../../model/requests/TextModelRestAPI";
import * as textRepository from "../../repositories/TextRepository";
import {TextDisplayModal} from "../TextDisplayModel";


export default function DeleteText() {

    const {register, handleSubmit} = useForm();
    const[content, setContent]= useState("");

    const [dropdown, setDropdown] = useState([0]);
    const texts = textRepository.useGetAllText()
    const [modalShow,setModalShow] = useState([false])
    const [arr,setArr] = useState([0])



    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Delete Text</h2> <br/><br/>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs="9">
                        <div>
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <h4 className="mb-3 text-left">Choose Text Name:</h4> <br/><br/>

                                <div>
                                    {
                                        dropdown.map((value, index) => {
                                            return (
                                                <>
                                                    <select value={dropdown[index]} onChange={(e)=>{
                                                        setArr([...dropdown])
                                                        arr[index] = parseInt(e.target.value)
                                                        setDropdown(arr)



                                                    }}>
                                                        {texts && texts.data ? texts.data.map(text => (
                                                            <option value={text.id}>{text.name}</option>
                                                        )) : null}
                                                    </select> {'    '}<Button onClick={(e)=>{
                                                    setArr([...dropdown])
                                                    arr[index] = true
                                                    setModalShow(arr)
                                                }}>Show Text</Button><br/><br/>

                                                    <TextDisplayModal show={modalShow[index]} onHide={() => {
                                                        setArr([...dropdown])
                                                        arr[index] = false
                                                        setModalShow(arr)
                                                    }} text={dropdown[index]}></TextDisplayModal>

                                                    <Button onClick={(e)=>{

                                                        deleteText(arr)

                                                    }}>Delete</Button>

                                                </>
                                            )
                                        })
                                    }
                                </div>




                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}