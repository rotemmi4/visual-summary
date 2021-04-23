import React, { useEffect, useState } from 'react';
import {useParams, useLocation} from "react-router-dom";

import {Button, Col, Container, Row} from "react-bootstrap";
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
     const texts = testRepository.get_test_properties(testName)




    return (
     <div>
    <h2 className="mb-3 text-left">Test: {testName}</h2><br/><br/><br/><br/>
    {/*{texts && texts.data ? texts.data.map((text,index) => (*/}
    {/*    <Row className="justify-content-center">*/}
    {/*        <Col>*/}
    {/*            <p>{text.name}</p>*/}
    {/*        </Col>*/}
    {/*        <Col>*/}
    {/*            <Button onClick={(e)=>{*/}
    {/*                let arr=[...modalShow]*/}
    {/*                arr[text.id] = true*/}
    {/*                setModalShow(arr)*/}
    {/*            }}>Show Visualization</Button> <b>  Visualization: {text.visualization}</b><br/><br/>*/}
    {/*            <RandomVisualizationDisplayModal visualization={text.visualization} show={modalShow[text.id]} onHide={() => {*/}
    {/*                let arr=[...modalShow]*/}
    {/*                arr[text.id] = false*/}
    {/*                setModalShow(arr)*/}
    {/*            }} text={text.id} threshold={text.threshold} propertyValue={text.propertyValue}></RandomVisualizationDisplayModal>*/}
    {/*        </Col>*/}
    {/*    </Row>*/}

    {/*)) : null}*/}
     </div>
        )

}