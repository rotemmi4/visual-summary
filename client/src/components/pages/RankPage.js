import React, {useState} from 'react';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import './RankPage.css';
import StarRating from "./StarRating";
import {addRank,} from "../../model/requests/StudentModelRestAPI";
import {Link} from "react-router-dom";


export default function RankPage() {

    const [highLightRank, sethighLightRank] = useState(1)
    const [GhighLightRank, setGhighLightRank] = useState(1)
    const [pontRank, setPontRank] = useState(1)
    const [GpontRank, setGpontRank] = useState(1)
    const [sammarytRank, setSammarytRank] = useState(1)
    const [textRank, setTextRank] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    };


    const saveRank = () => {

        // let student_id= localStorage.getItem('student_id')

        let student_id="54763"
        // let rank_order="1"
        addRank(student_id, textRank, GhighLightRank, highLightRank, pontRank,GpontRank, sammarytRank)
        // handleShow()
    }

    const handleShow = () => setShow(true);

    let callbackFunction = (propRank,type) => {
        if (type == "highligth" ){
            sethighLightRank(propRank)
        }
        if (type == "gradualhighlight" ){
            setGhighLightRank(propRank)
        }
        if (type == "increasedfont" ){
            setPontRank(propRank)
        }
        if (type == "gradualfont" ){
            setGpontRank(propRank)
        }
        if (type == "sammary" ){
            setSammarytRank(propRank)
        }
        if (type == "withoutvisualization" ){
            setTextRank(propRank)
        }
    }

    return (

        <Container className="w-80 center">

            <Row className="mb-3 justify-content-center align-items-center">
                <h2 className="block">Please rank the visualizations</h2>
                <h4 className="block">How effective was the visualizations in summarizing the texts and answering the questions?</h4>

            </Row>


            <div className="pics">

                <Row>

                    <Col>
                        <h3 className="block">Original Text</h3>
                        <img src={"/images/withoutVisu.PNG"} alt=""/>
                        <StarRating type={"withoutvisualization"} parentCallback={callbackFunction}></StarRating>
                    </Col>

                    <Col>
                        <h3 className="block">Highlight</h3>
                        <img src={"/images/highlight.PNG"} alt=""/>
                        <StarRating type={"highligth"} parentCallback={callbackFunction}></StarRating>

                    </Col>

                    <Col>
                        <h3 className="block">Font</h3>
                        <img src={"/images/Increased Font.PNG"} alt=""/>
                        <StarRating type={"increasedfont"} parentCallback={callbackFunction}></StarRating>

                    </Col>

                </Row>

                <Row>

                    <Col>
                        <h3 className="block">Summary</h3>
                        <img src={"/images/sammary.PNG"} alt=""/><br/><br/>
                        <StarRating type={"sammary"} parentCallback={callbackFunction}></StarRating>
                    </Col>

                    <Col>
                        <h3 className="block">Gradual Highlight</h3>
                        <img src={"/images/gradualHighlight.PNG"} alt=""/>
                        <StarRating type={"gradualhighlight"} parentCallback={callbackFunction}></StarRating>

                    </Col>

                    <Col>
                        <h3 className="block">Gradual Font</h3>
                        <img src={"/images/Gradual Font.PNG"} alt=""/>
                        <StarRating type={"gradualfont"} parentCallback={callbackFunction}></StarRating>

                     </Col>




                </Row>



                {/*<Button variant="primary" onClick={(e)=>{*/}
                {/*    let student_id="12213"*/}
                {/*    let rank_order="1"*/}
                {/*    addRank(student_id, textRank, GhighLightRank, highLightRank, pontRank,GpontRank, sammarytRank,rank_order)*/}
                {/*    handleShow()*/}
                {/*}}>Save</Button>*/}
                <br/>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        saved
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Row className="justify-content-center align-items-center">
                    <Link to={"/RankByOrder"}>
                        <Button variant="outline-success" block size="lg" onClick={saveRank}>Next</Button>
                    </Link><br/><br/><br/><br/><br/>
                </Row>

            </div>

        </Container>
    )

}