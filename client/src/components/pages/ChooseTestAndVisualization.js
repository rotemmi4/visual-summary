import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";

export default function ChooseTestAndVisualization() {

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
                <text>Choose Tests And Visualizations</text><br/>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs="9">
                        <div>
                            {
                                dropdown.map((value, index) => {
                                    return (
                                        <>
                                            <select value={dropdown[index]} onChange={(e)=>{
                                                let arr=[...dropdown]
                                                arr[index] = parseInt(e.target.value)
                                                setDropdown(arr)
                                            }}>
                                                {texts && texts.data ? texts.data.map(text => (
                                                    <option value={text.id}>{text.name}</option>
                                                )) : null}
                                            </select>
                                            {'    '}<Button onClick={(e)=>{
                                            let arr=[...modalShow]
                                            arr[index] = true
                                            setModalShow(arr)
                                        }}>Choose Visualization</Button><br/><br/>
                                            <VisualizationDisplayModal show={modalShow[index]} onHide={() => {
                                                let arr=[...modalShow]
                                                arr[index] = false
                                                setModalShow(arr)
                                            }} text={dropdown[index]}></VisualizationDisplayModal>
                                        </>
                                    )
                                })
                            }
                        </div>


                    </Col>
                    <Col></Col>
                </Row>
                <Button className="btn btn-primary">SAVE TEST</Button><br/><br/><br/>
            </Container>
        </>);
}