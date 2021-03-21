import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";


export default function GenerateRandomTextAndRandomVisualization() {

    const { id } = useParams()
    const textById = textRepository.useGetTextById(id)
    const [modalShow,setModalShow] = useState([false,false,false,false,false,false,false,false,false,false])

    const size = 10
    const [dropdown, setDropdown] = useState([0,0,0,0,0,0,0,0,0,0]);


    const texts = textRepository.useGetAllText()


    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Test</h2><br/>
                <text>Generate Random Texts And Random Visualizations</text><br/>
                {texts && texts.data ? texts.data.map(text => (
                    <Row className="justify-content-center">
                        <Col>
                            <p>{text.name}</p>
                        </Col>
                        <Col>
                            <Button onClick={(e)=>{
                                let arr=[...modalShow]
                                arr[text.id] = true
                                setModalShow(arr)
                            }}>Choose Visualization</Button><br/><br/>
                            <VisualizationDisplayModal show={modalShow[text.id]} onHide={() => {
                                let arr=[...modalShow]
                                arr[text.id] = false
                                setModalShow(arr)
                            }} text={text.id}></VisualizationDisplayModal>
                        </Col>
                    </Row>

                )) : null}
                <Button className="btn btn-primary">SAVE TEST</Button><br/><br/><br/>
            </Container>
        </>);
}