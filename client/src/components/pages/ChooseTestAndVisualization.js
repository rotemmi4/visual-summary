import React, { useState } from 'react';
import { useParams, useLocation} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import * as testRepository from "../../repositories/TestRepository"
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";

export default function ChooseTestAndVisualization(props) {

    let location = useLocation();
    let type = location.state.type
    let testName = location.state.testName
    const {id} = useParams()
    const textById = textRepository.useGetTextById(id)
    const [modalShow, setModalShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false])

    const size = 10
    const [dropdown, setDropdown] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [propertyName, setPropertyName] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [propertyValue, setPropertyValue] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [propertyType, setPropertyType] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [visualizationType, setVisualizationType] = useState(["Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization","Without Visualization", "Without Visualization"])
    const [thresholdTexts, setThreshold] = useState([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5])
    const [selectedTexts, setSelectedTexts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    let callbackFunction = (propName, propValue, propType, visualType, textID, index,thresh) => {

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

    let saveFullTest = function (event) {
        testRepository.saveTest(testName, "Choose Tests And Visualizations")
        for (let i = 0; i < 12; i++) {
            textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName,thresholdTexts[i])
        }
    }
    let texts = textRepository.useGetAllText()


    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Test: {testName}</h2><br/>
                <text>Choose Tests And Visualizations</text>
                <br/>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs="9">
                        <div>
                            {
                                dropdown.map((value, index) => {
                                    return (
                                        <>
                                            <select defaultValue={-1}ט onChange={(e) => {
                                                let arr = [...dropdown]
                                                arr[index] = parseInt(e.target.value)
                                                setDropdown(arr)
                                            }}>
                                                <option disabled value={-1} hidden> -- select an option -- </option>
                                                {texts && texts.data ? texts.data.map(text => (
                                                    <option value={text.id}>{text.name}</option>
                                                )) : null}
                                            </select>
                                            {'    '}<Button onClick={(e) => {
                                            let arr = [...modalShow]
                                            arr[index] = true
                                            setModalShow(arr)
                                        }}>Choose Visualization</Button>
                                            <b>Visualization: {visualizationType[index]}</b>
                                            {/*<b>Proper: {propertyValue[index]}</b>*/}
                                            <br/><br/>
                                            <VisualizationDisplayModal show={modalShow[index]} onHide={() => {
                                                let arr = [...modalShow]
                                                arr[index] = false
                                                setModalShow(arr)
                                            }} text={dropdown[index]} parentCallback={callbackFunction} index={index}
                                                                       visualizationType={visualizationType[index]} threshold={thresholdTexts[index]}
                                                                       propertyName={propertyName[index]} propertyValue={propertyValue[index]} propertyType={propertyType[index]}></VisualizationDisplayModal>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Button className="btn btn-primary" onClick={saveFullTest}>SAVE TEST</Button><br/><br/><br/>
            </Container>
        </>);
};