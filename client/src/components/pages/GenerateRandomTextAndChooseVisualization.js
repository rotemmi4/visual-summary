import React, { useState } from 'react';
import {useParams, useLocation} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";
import * as testRepository from "../../repositories/TestRepository";
import {ValidationModal} from "../ValidationModal";


export default function GenerateRandomTextAndChooseVisualization() {

    let location = useLocation();
    let testName = location.state.testName
    const {id} = useParams()
    const textById = textRepository.useGetTextById(id)
    const [modalShow, setModalShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

    const size = 10
    const [show, setShow] = useState(false)
    const [modalInformation, setModalInformation] = useState("")

    const reload = () => window.location.reload();

    const handleClose = () => {
        setShow(false)
        reload();
    };


    const texts = textRepository.useRandomText()
    const [propertyName, setPropertyName] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [propertyValue, setPropertyValue] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [propertyType, setPropertyType] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [visualizationType, setVisualizationType] = useState(["Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization"])
    const [thresholdTexts, setThreshold] = useState([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5])
    const [selectedTexts, setSelectedTexts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    let callbackFunction = (propName, propValue, propType, visualType, textID, index, thresh) => {

        let newPropertyName = [...propertyName]
        newPropertyName[index] = propName
        setPropertyName(newPropertyName)

        let newPropertyValue = [...propertyValue]
        newPropertyValue[index] = propValue
        setPropertyValue(newPropertyValue)

        let newPropertyType = [...propertyType]
        newPropertyType[index] = propType
        setPropertyType(newPropertyType)

        let newVisualizationType = [...visualizationType]
        newVisualizationType[index] = visualType
        setVisualizationType(newVisualizationType)

        let newSelectedTexts = [...selectedTexts]
        newSelectedTexts[index] = textID
        setSelectedTexts(newSelectedTexts)

        let newThresholdTexts = [...thresholdTexts]
        newThresholdTexts[index] = thresh
        setThreshold(newThresholdTexts)
    }
    //VALIDATION
    let set_validation_visualization = function (index) {
        if (new Set(visualizationType[0 + index], visualizationType[1 + index], visualizationType[2 + index], visualizationType[3 + index], visualizationType[4 + index], visualizationType[5 + index]).size !== 6)
            return false
        else
            return true
    }
    let saveFullTest = function(event) {

        // if (!(set_validation_visualization(0) && set_validation_visualization(1) && set_validation_visualization(1))) {
        //     console.log("Visualization can be in Set only one time")
        //     setModalInformation("Visualization can be in Set only one time")
        //     setShow(true)
        // } else {
            testRepository.saveTest(testName, "Generate Random Texts And Choose Visualizations")
            for (let i = 0; i < 6; i++) {
                textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName, thresholdTexts[i], 1)
            }
            for (let i = 6; i < 12; i++) {
                textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName, thresholdTexts[i], 2)
            }
            for (let i = 12; i < 18; i++) {
                textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName, thresholdTexts[i], 3)
            }
        // }
    }


    //
    // let saveFullTest = function(event){
    //     setShow(true)
    //     }


        // textRepository.save(type,id,propertyName,propertyValue,propertyType)
        // props.onHide()

    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Test: {testName}</h2><br/>
                <h4>Generate Random Texts And Choose Visualizations</h4><br/>
                {texts && texts.data  ? texts.data.map((text,index) => (
                    <div>
                    <text>Set {text.set}</text>
                    <Row className="justify-content-center">
                        <Col>
                            <p>{text.name}</p>
                        </Col>
                        <Col>
                            <Button onClick={(e)=>{
                                let arr=[...modalShow]
                                arr[text.id] = true
                                setModalShow(arr)
                            }}>Choose Visualization</Button><b>  Visualization: {visualizationType[index]}</b><br/><br/>
                            <VisualizationDisplayModal show={modalShow[text.id]} onHide={() => {
                                let arr=[...modalShow]
                                arr[text.id] = false
                                setModalShow(arr)
                            }} text={text.id} parentCallback = {callbackFunction} index={index}
                               visualizationType={visualizationType[index]} threshold={thresholdTexts[index]}
                               propertyName={propertyName[index]} propertyValue={propertyValue[index]} propertyType={propertyType[index]}></VisualizationDisplayModal>
                        </Col>

                    </Row>
                    </div>

                )) : null}
                <Button className="btn btn-primary" onClick={saveFullTest}>SAVE TEST</Button><br/><br/><br/>
                <ValidationModal show={show} handleClose={handleClose} text={modalInformation}></ValidationModal>
            </Container>
        </>);
}