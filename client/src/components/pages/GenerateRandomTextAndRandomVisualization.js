import React, { useEffect, useState } from 'react';
import {useParams, useLocation} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";
import {RandomVisualizationDisplayModal} from "../RandomVisualizationDispalyModal";


export default function GenerateRandomTextAndRandomVisualization() {

    let location = useLocation();
    let testName = location.state.testName
    const { id } = useParams()
    const textById = textRepository.useGetTextById(id)
    const [modalShow,setModalShow] = useState([false,false,false,false,false,false,false,false,false,false])
    const size = 10
    const [dropdown, setDropdown] = useState([0,0,0,0,0,0,0,0,0,0]);


    const texts = textRepository.useRandomTextAndVisualization()


    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Test: {testName}</h2><br/>
                <text>Generate Random Texts And Random Visualizations</text><br/><br/><br/>
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
                            }}>Show Visualization</Button><br/><br/>
                            <RandomVisualizationDisplayModal visualization={text.visualization} show={modalShow[text.id]} onHide={() => {
                                let arr=[...modalShow]
                                arr[text.id] = false
                                setModalShow(arr)
                            }} text={text.id}></RandomVisualizationDisplayModal>
                        </Col>
                    </Row>

                )) : null}
                <Button className="btn btn-primary">SAVE TEST</Button><br/><br/><br/>
            </Container>
        </>);
}