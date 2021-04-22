import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import './RankPage.css';
import {addRank,} from "../../model/requests/StudentModelRestAPI";


export default function RankPage() {

    const [firstPlace, setFirstPlace] = useState("")
    const [secondPlace, setSecondPlace] = useState("")
    const [thirdPlace, setThirdPlace] = useState("")
    const [fourthPlace, setFourthPlace] = useState("")
    const [fifthPlace, setFifthPlace] = useState("")
    const [sixthPlace, setSixthPlace] = useState("")


    return (

        <Container className="w-80 center">

            <Row className="mb-3 justify-content-center align-items-center">
                <h2 className="block">Please rank the visualizations by order first place to last</h2>
            </Row>


            <div className="byorder">

                First Place:
                <select className="custom-select" onChange={(e)=>{
                    const selectedOne=e.target.value;
                    setFirstPlace(selectedOne)
                }}>
                    <option value="withoutVisualization">without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select>

                Second Place:
                <select className="custom-select" onChange={(e)=>{
                    const selectedTwo=e.target.value;
                    setSecondPlace(selectedTwo)
                }}>
                    <option value="withoutVisualization">without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select>

                Third Place:
                <select className="custom-select" onChange={(e)=>{
                    const selectedThird=e.target.value;
                    setThirdPlace(selectedThird)
                }}>
                    <option value="withoutVisualization">without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select>

                Fourth Place:
                <select className="custom-select" onChange={(e)=>{
                    const selectedFourth=e.target.value;
                    setFourthPlace(selectedFourth)
                }}>
                    <option value="withoutVisualization">without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select>

                Fifth Place:
                <select className="custom-select" onChange={(e)=>{
                    const selectedFifth=e.target.value;
                    setFifthPlace(selectedFifth)
                }}>
                    <option value="withoutVisualization">without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select>

                Sixth Place:
                <select className="custom-select" onChange={(e)=>{
                    const selectedSixth=e.target.value;
                    setSixthPlace(selectedSixth)
                }}>
                    <option value="withoutVisualization">without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select>

                <Button variant="primary" onClick={(e)=>{

                    let rank_order= firstPlace+","+secondPlace+","+thirdPlace+","+fourthPlace+","+fifthPlace+","+sixthPlace

                }}>Save</Button><br/><br/><br/><br/><br/>


            </div>

        </Container>
    )

}