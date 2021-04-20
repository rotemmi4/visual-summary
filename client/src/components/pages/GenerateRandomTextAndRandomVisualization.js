import React, { useEffect, useState } from 'react';
import {useParams, useLocation} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";
import {RandomVisualizationDisplayModal} from "../RandomVisualizationDispalyModal";
import * as testRepository from "../../repositories/TestRepository";


export default function GenerateRandomTextAndRandomVisualization() {

    let location = useLocation();
    let testName = location.state.testName
    // const { id } = useParams()
    // const textById = textRepository.useGetTextById(id)
    const [modalShow,setModalShow] = useState([false,false,false,false,false,false,false,false,false,false])
    const size = 10
    const [dropdown, setDropdown] = useState([0,0,0,0,0,0,0,0,0,0]);


    const texts = textRepository.useRandomTextAndVisualization()
    let saveFullTest = function(event){

        for (let i = 0; i < 12; i++) {
            // if(texts[i]. == "Without Visualization"){
            //     //textRepository.save(texts[i]["visualization"],texts[i]["text"],"none","none","none",testName)
            // }
            // else if(texts[i].visualization == "Summary Only"){
            //     textRepository.save(texts[i].visualization,texts[i].text,"none","none","none",testName)
            // }
            // else if(texts[i].visualization == "Gradual Highlight"){
            //     textRepository.save(texts[i].visualization,texts[i].text,"color","yellow","str",testName)
            // }
            // else if(texts[i].visualization == "Highlight"){
            //     textRepository.save(texts[i].visualization,texts[i].text,"color","yellow","str",testName)
            // }
            // else if(texts[i].visualization == "Increased Font"){
            //     textRepository.save(texts[i].visualization,texts[i].text,"font","18","int",testName)
            // }
            // else if(texts[i].visualization == "Summary Only"){
            //     textRepository.save(texts[i].visualization,texts[i].text,"font","18","int",testName)
            // }

        }
        testRepository.saveTest(testName,"Generate Random Texts And Random Visualizations")

    }

    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Test: {testName}</h2><br/>
                <text>Generate Random Texts And Random Visualizations</text><br/><br/><br/>
                {texts && texts.data ? texts.data.map((text,index) => (
                    <Row className="justify-content-center">
                        <Col>
                            <p>{text.name}</p>
                        </Col>
                        <Col>
                            <Button onClick={(e)=>{
                                let arr=[...modalShow]
                                arr[text.id] = true
                                setModalShow(arr)
                            }}>Show Visualization</Button> <b>  Visualization: {text.visualization}</b><br/><br/>
                            <RandomVisualizationDisplayModal visualization={text.visualization} show={modalShow[text.id]} onHide={() => {
                                let arr=[...modalShow]
                                arr[text.id] = false
                                setModalShow(arr)
                            }} text={text.id} threshold={text.threshold} propertyValue={text.propertyValue}></RandomVisualizationDisplayModal>
                        </Col>
                    </Row>

                )) : null}
                <Button className="btn btn-primary" onClick={saveFullTest}>SAVE TEST</Button><br/><br/><br/>
            </Container>
        </>);
}