import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import './RankPage.css';
import StarRating from "./StarRating";
import {addRank,} from "../../model/requests/StudentModelRestAPI";


export default function RankPage() {

    const [highLightRank, sethighLightRank] = useState(1)
    const [GhighLightRank, setGhighLightRank] = useState(1)
    const [pontRank, setPontRank] = useState(1)
    const [GpontRank, setGpontRank] = useState(1)
    const [sammarytRank, setSammarytRank] = useState(1)
    const [textRank, setTextRank] = useState(1)


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
            </Row>


            <div className="pics">

                <Row>

                    <Col>
                        <h3 className="block">Highlight</h3>
                        <img src={"/images/highlight.PNG"} alt=""/>
                        <StarRating type={"highligth"} parentCallback={callbackFunction}></StarRating>

                    </Col>

                    <Col>
                        <h3 className="block">Gradual Highlight</h3>
                        <img src={"/images/gradualHighlight.PNG"} alt=""/>
                        <StarRating type={"gradualhighlight"} parentCallback={callbackFunction}></StarRating>

                    </Col>

                    <Col>
                        <h3 className="block">Increased Font</h3>
                        <img src={"/images/Increased Font.PNG"} alt=""/>
                        <StarRating type={"increasedfont"} parentCallback={callbackFunction}></StarRating>

                    </Col>


                </Row>

                <Row>
                    <Col>
                        <h3 className="block">Gradual Font</h3>
                        <img src={"/images/Gradual Font.PNG"} alt=""/>
                        <StarRating type={"gradualfont"} parentCallback={callbackFunction}></StarRating>

                     </Col>

                    <Col>
                        <h3 className="block">Summary</h3>
                        <img src={"/images/sammary.PNG"} alt=""/>
                        <StarRating type={"sammary"} parentCallback={callbackFunction}></StarRating>
                    </Col>

                    <Col>
                        <h3 className="block">Without Visualization</h3>

                        <StarRating type={"withoutvisualization"} parentCallback={callbackFunction}></StarRating>
                    </Col>
                </Row>



                <Button variant="primary" onClick={(e)=>{
                    let student_id=1
                    let rank_order=1
                    addRank(student_id, textRank, GhighLightRank, highLightRank, pontRank,GpontRank, sammarytRank,rank_order)
                }}>Save</Button><br/><br/><br/><br/><br/>

                <Button variant="primary" onClick={(e)=>{

                }}>Next</Button><br/><br/><br/><br/><br/>

            </div>

        </Container>
    )

}