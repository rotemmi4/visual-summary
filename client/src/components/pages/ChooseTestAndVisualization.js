import React, { useState } from 'react';
import { useParams, useLocation} from "react-router-dom";
import * as textRepository from "../../repositories/TextRepository";
import * as testRepository from "../../repositories/TestRepository"
import {Button, Col, Container, Row} from "react-bootstrap";
import {VisualizationDisplayModal} from "../VisualizationDisplayModal";
import {AddTextModal} from "../AddTextModal";
import {ValidationModal} from "../ValidationModal";
import {DeleteQuestionModal} from "../DeleteQuestionModal";

export default function ChooseTestAndVisualization(props) {

    let location = useLocation();
    let type = location.state.type
    let testName = location.state.testName
    const {id} = useParams()
    const textById = textRepository.useGetTextById(id)
    const [modalShow, setModalShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

    const size = 10
    const [dropdown1, setDropdown1] = useState([0, 0, 0, 0, 0, 0]);
    const [dropdown2, setDropdown2] = useState([0, 0, 0, 0, 0, 0]);
    const [dropdown3, setDropdown3] = useState([0, 0, 0, 0, 0, 0]);
    const [propertyName, setPropertyName] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [propertyValue, setPropertyValue] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [propertyType, setPropertyType] = useState(["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"])
    const [visualizationType, setVisualizationType] = useState(["Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization", "Without Visualization","Without Visualization", "Without Visualization", "Without Visualization","Without Visualization", "Without Visualization", "Without Visualization","Without Visualization", "Without Visualization"])
    const [thresholdTexts, setThreshold] = useState([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5])
    const [selectedTexts, setSelectedTexts] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const [show,setShow]=useState(false)
    const [modalInformation,setModalInformation]=useState("")

    const reload=()=>window.location.reload();

    const handleClose = () => {
        setShow(false)
        // reload();
    };

    const handleShow = () => setShow(true);

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

    async function saveFullTest(event) {
        if(!set_validation_texts() ){
            console.log("Text can be in Test only one time.")
            setModalInformation("Text can be in Test only one time")
            setShow(true)
        }
        // if(!(set_validation_visualization(0) && set_validation_visualization(1) && set_validation_visualization(2))){
        //     console.log("Visualization can be in Set only one time")
        //     setModalInformation("Visualization can be in Set only one time")
        //     setShow(true)
        // }
        else{
            testRepository.saveTest(testName, "Choose Tests And Visualizations")
            for (let i = 0; i < 6; i++) {
                textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName,thresholdTexts[i],1)
            }
            for (let i = 6; i < 12; i++) {
                textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName,thresholdTexts[i],2)
            }
            for (let i = 12; i < 18; i++) {
                textRepository.save(visualizationType[i], selectedTexts[i], propertyName[i], propertyValue[i], propertyType[i], testName,thresholdTexts[i],3)
            }
        }

    }

    // let saveFullTest = function (event) {
    //     setShow(true)
    //
    // }

    //VALIDATION
    let set_validation_texts=function (){
        if(new Set(selectedTexts).size !== 18)
            return false
        else
            return true
    }
    let set_validation_visualization=function (index){
        if(new Set(visualizationType[0+index],visualizationType[1+index],visualizationType[2+index],visualizationType[3+index],visualizationType[4+index],visualizationType[5+index]).size !== 6)
            return false
        else
            return true
    }

    //GET ALL TEXT
    let texts = textRepository.useGetAllText()

    // new Set(arr).size !== arr.length

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
                            <h3>Set 1</h3>
                            {
                                dropdown1.map((value, index) => {
                                    return (
                                        <>
                                            <select defaultValue={-1}ט onChange={(e) => {
                                                let arr = [...dropdown1]
                                                arr[index] = parseInt(e.target.value)
                                                setDropdown1(arr)
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
                                            }} text={dropdown1[index]} parentCallback={callbackFunction} index={index}
                                                                       visualizationType={visualizationType[index]} threshold={thresholdTexts[index]}
                                                                       propertyName={propertyName[index]} propertyValue={propertyValue[index]} propertyType={propertyType[index]}></VisualizationDisplayModal>
                                        </>
                                    )
                                })
                            }
                        </div><br/>
                        <div>
                            <h3>Set 2</h3>
                            {
                                dropdown2.map((value, index) => {
                                    return (
                                        <>
                                            <select defaultValue={-1} onChange={(e) => {
                                                let arr = [...dropdown2]
                                                arr[index] = parseInt(e.target.value)
                                                setDropdown2(arr)
                                            }}>
                                                <option disabled value={-1} hidden> -- select an option -- </option>
                                                {texts && texts.data ? texts.data.map(text => (
                                                    <option value={text.id}>{text.name}</option>
                                                )) : null}
                                            </select>
                                            {'    '}<Button onClick={(e) => {
                                            let arr = [...modalShow]
                                            arr[index+6] = true
                                            setModalShow(arr)
                                        }}>Choose Visualization</Button>
                                            <b>Visualization: {visualizationType[index+6]}</b>
                                            {/*<b>Proper: {propertyValue[index]}</b>*/}
                                            <br/><br/>
                                            <VisualizationDisplayModal show={modalShow[index+6]} onHide={() => {
                                                let arr = [...modalShow]
                                                arr[index+6] = false
                                                setModalShow(arr)
                                            }} text={dropdown2[index]} parentCallback={callbackFunction} index={index+6}
                                                                       visualizationType={visualizationType[index+6]} threshold={thresholdTexts[index+6]}
                                                                       propertyName={propertyName[index+6]} propertyValue={propertyValue[index+6]} propertyType={propertyType[index+6]}></VisualizationDisplayModal>
                                        </>
                                    )
                                })
                            }
                        </div><br/>
                        <div>
                            <h3>Set 3</h3>
                            {
                                dropdown2.map((value, index) => {
                                    return (
                                        <>
                                            <select defaultValue={-1} onChange={(e) => {
                                                let arr = [...dropdown3]
                                                arr[index] = parseInt(e.target.value)
                                                setDropdown3(arr)
                                            }}>
                                                <option disabled value={-1} hidden> -- select an option -- </option>
                                                {texts && texts.data ? texts.data.map(text => (
                                                    <option value={text.id}>{text.name}</option>
                                                )) : null}
                                            </select>
                                            {'    '}<Button onClick={(e) => {
                                            let arr = [...modalShow]
                                            arr[index+12] = true
                                            setModalShow(arr)
                                        }}>Choose Visualization</Button>
                                            <b>Visualization: {visualizationType[index+12]}</b>
                                            {/*<b>Proper: {propertyValue[index]}</b>*/}
                                            <br/><br/>
                                            <VisualizationDisplayModal show={modalShow[index+12]} onHide={() => {
                                                let arr = [...modalShow]
                                                arr[index+12] = false
                                                setModalShow(arr)
                                            }} text={dropdown3[index]} parentCallback={callbackFunction} index={index+12}
                                                                       visualizationType={visualizationType[index+12]} threshold={thresholdTexts[index+12]}
                                                                       propertyName={propertyName[index+12]} propertyValue={propertyValue[index+12]} propertyType={propertyType[index+12]}></VisualizationDisplayModal>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                <Button className="btn btn-primary" onClick={saveFullTest}>SAVE TEST</Button><br/><br/><br/>
                <ValidationModal show={show} handleClose={handleClose}
                 text={modalInformation}></ValidationModal>

            </Container>
        </>);
};