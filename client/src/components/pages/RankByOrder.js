import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import './RankPage.css';
import {updateRank,} from "../../model/requests/StudentModelRestAPI";
import {Link} from "react-router-dom";
import StarRating from "./StarRating";


export default function RankByOrderPage() {

/*
    const [firstPlace, setFirstPlace] = useState("")
    const [secondPlace, setSecondPlace] = useState("")
    const [thirdPlace, setThirdPlace] = useState("")
    const [fourthPlace, setFourthPlace] = useState("")
    const [fifthPlace, setFifthPlace] = useState("")
    const [sixthPlace, setSixthPlace] = useState("")
*/

    const [WithoutVisualization, setWithoutVisualization] = useState("")
    const [Highlight, setHighlight] = useState("")
    const [Font, setFont] = useState("")
    const [Summary, setSummary] = useState("")
    const [GradualHighlight, setGradualHighlight] = useState("")
    const [GradualFont, setGradualFont] = useState("")


    const saveFunc= ()=> {
        /*
           let student_id= localStorage.getItem('student_id')
        */
        // let rankName= firstPlace+":"+secondPlace+":"+thirdPlace+":"+fourthPlace+":"+fifthPlace+":"+sixthPlace;

        let student_id="54763"

        updateRank(student_id,WithoutVisualization,Highlight,Font,Summary,GradualHighlight,GradualFont)
    }


/*    let updateFunction = (prop,place) => {
        if (place == "first" ){
            setFirstPlace(prop)
        }
        if (place == "Second" ){
            setSecondPlace(prop)
        }
        if (place == "Third" ){
            setThirdPlace(prop)
        }
        if (place == "Fourth" ){
            setFourthPlace(prop)
        }
        if (place == "Fifth" ){
            setFifthPlace(prop)
        }
        if (place == "Sixth" ){
            setSixthPlace(prop)
        }
    }*/




    return (

        <Container className="w-80 center">

            <Row className="mb-3 justify-content-center align-items-center">
                <h2 className="block">Please rank the visualizations by order first place to last</h2>
            </Row>


            <div className="byorder">

                <Row>
                    <Col>
                        <h3 className="block">Original Text</h3>
                        <img src={"/images/withoutVisu.PNG"} alt=""/><br/><br/>
                        <select className="custom-select" onChange={(e)=>{
                            const selectedWithoutVisualization=e.target.value;
                            setWithoutVisualization(selectedWithoutVisualization)
/*                            updateFunction("Without Visualization",selectedWithoutVisualization)*/

                        }}>
                            <option value="Choose">Choose a Place</option>
                            <option value="1">1st Place</option>
                            <option value="2">2nd Place</option>
                            <option value="3">3rd Place</option>
                            <option value="4">4th Place</option>
                            <option value="5">5th Place</option>
                            <option value="6">6th Place</option>
                        </select>

                    </Col>

                    <Col>
                        <h3 className="block">Highlight</h3>
                        <img src={"/images/highlight.PNG"} alt=""/><br/><br/>
                        <select className="custom-select" onChange={(e)=>{
                            const selectedHighlight=e.target.value;
                            setHighlight(selectedHighlight)
                            // updateFunction("Highlight",selectedHighlight)
                        }}>
                            <option value="Choose">Choose a Place</option>
                            <option value="1">1st Place</option>
                            <option value="2">2nd Place</option>
                            <option value="3">3rd Place</option>
                            <option value="4">4th Place</option>
                            <option value="5">5th Place</option>
                            <option value="6">6th Place</option>
                        </select><br/><br/><br/><br/>
                    </Col>


                    <Col>
                        <h3 className="block">Font</h3>
                        <img src={"/images/Increased Font.PNG"} alt=""/><br/><br/>
                        <select className="custom-select" onChange={(e)=>{
                            const selectedIncreasedFont=e.target.value;
                            setFont(selectedIncreasedFont)
                            // updateFunction("Increased Font",selectedIncreasedFont)
                        }}>
                            <option value="Choose">Choose a Place</option>
                            <option value="1">1st Place</option>
                            <option value="2">2nd Place</option>
                            <option value="3">3rd Place</option>
                            <option value="4">4th Place</option>
                            <option value="5">5th Place</option>
                            <option value="6">6th Place</option>
                        </select>

                    </Col>


                </Row>

                <Row>

                    <Col>
                        <h3 className="block">Summary</h3>
                        <img src={"/images/sammary.PNG"} alt=""/><br/><br/>
                        <select className="custom-select" onChange={(e)=>{
                            const selectedSummary=e.target.value;
                            setSummary(selectedSummary)
                            //updateFunction("Summary",selectedSummary)
                        }}>
                            <option value="Choose">Choose a Place</option>
                            <option value="1">1st Place</option>
                            <option value="2">2nd Place</option>
                            <option value="3">3rd Place</option>
                            <option value="4">4th Place</option>
                            <option value="5">5th Place</option>
                            <option value="6">6th Place</option>
                        </select>
                    </Col>

                    <Col>
                        <h3 className="block">Gradual Highlight</h3>
                        <img src={"/images/gradualHighlight.PNG"} alt=""/><br/><br/>
                        <select className="custom-select" onChange={(e)=>{
                            const selectedGradualHighlight=e.target.value;
                            setGradualHighlight(selectedGradualHighlight)
                            //updateFunction("Gradual Highlight",selectedGradualHighlight)
                        }}>
                            <option value="Choose">Choose a Place</option>
                            <option value="1">1st Place</option>
                            <option value="2">2nd Place</option>
                            <option value="3">3rd Place</option>
                            <option value="4">4th Place</option>
                            <option value="5">5th Place</option>
                            <option value="6">6th Place</option>
                        </select>
                    </Col>

                    <Col>
                        <h3 className="block">Gradual Font</h3>
                        <img src={"/images/Gradual Font.PNG"} alt=""/><br/><br/>
                        <select className="custom-select" onChange={(e)=>{
                            const selectedGradualFont=e.target.value;
                            setGradualFont(selectedGradualFont)
                            //updateFunction("Gradual Font",selectedGradualFont)
                        }}>
                            <option value="Choose">Choose a Place</option>
                            <option value="1">1st Place</option>
                            <option value="2">2nd Place</option>
                            <option value="3">3rd Place</option>
                            <option value="4">4th Place</option>
                            <option value="5">5th Place</option>
                            <option value="6">6th Place</option>
                        </select>

                    </Col>




                </Row><br/>


                <Row className="justify-content-center align-items-center">
                    <Link to={"/Done"}>
                        <Button variant="outline-success" onClick={saveFunc}>Save</Button><br/><br/><br/><br/><br/>
                    </Link>
                </Row>


            </div>

        </Container>
    )

}