import React, { useEffect, useState } from 'react';
import {useParams, useLocation} from "react-router-dom";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../model/context/auth_context';
import * as textRepository from "../../repositories/TextRepository";
import * as testRepository from "../../repositories/TestRepository";
import {RandomVisualizationDisplayModal} from "../RandomVisualizationDispalyModal";



export default function ShowTest() {
     let location = useLocation();
     let testName = location.state.testName
    //
     const [modalShow,setModalShow] = useState([false,false,false,false,false,false,false,false,false,false])
    // const size = 12

    //
    //
    const texts = testRepository.getTestProperties(testName)

    let get_visualization= function(id){
         if(id == 0)
             return "Without Visualization"
        else if(id == 1)
            return "Gradual Highlight"
        else if(id == 2)
            return "Highlight"
        else if(id == 3)
            return "Increased Font"
        else if(id == 4)
            return "Gradual Font"
        else
            return "SummaryOnly"

    }



    return (
     <div>
    <h2 className="mb-3 text-left">Test: {testName}</h2><br/><br/><br/><br/>

    {texts && texts.data ? texts.data.map((text,index) => (
        // <p>Check</p>
        <Row className="justify-content-center">
            <Col>
                <p>{text.name}</p>
            </Col>
            <Col>
                <Button onClick={(e)=>{
                    let arr=[...modalShow]
                    arr[text.text_id] = true
                    setModalShow(arr)
                }}>Show Visualization</Button> <b>  Visualization: {get_visualization(text.visualiztion_id)}</b><br/><br/>
                <RandomVisualizationDisplayModal visualization={get_visualization(text.visualiztion_id)} show={modalShow[text.text_id]} onHide={() => {
                    let arr=[...modalShow]
                    arr[text.text_id] = false
                    setModalShow(arr)
                }} text={text.text_id} threshold={text.threshold} propertyValue={text.property_value}></RandomVisualizationDisplayModal>
            </Col>
        </Row>

    )) : null}
     </div>
        )

}