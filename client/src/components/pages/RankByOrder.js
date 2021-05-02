import React, {useState} from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';
import './RankPage.css';
import {addRank, updateRank,} from "../../model/requests/StudentModelRestAPI";
import {Link} from "react-router-dom";


export default function RankByOrderPage() {

    const [firstPlace, setFirstPlace] = useState("")
    const [secondPlace, setSecondPlace] = useState("")
    const [thirdPlace, setThirdPlace] = useState("")
    const [fourthPlace, setFourthPlace] = useState("")
    const [fifthPlace, setFifthPlace] = useState("")
    const [sixthPlace, setSixthPlace] = useState("")

    const [rank_order, setRankOrder] = useState("")

    const saveFunc= ()=> {
        /*
           let student_id= localStorage.getItem('student_id')
        */
        // let rankName= firstPlace+":"+secondPlace+":"+thirdPlace+":"+fourthPlace+":"+fifthPlace+":"+sixthPlace;
        let student_id="54763"
        // console.log(rankName)
        updateRank(student_id,firstPlace,secondPlace,thirdPlace,fourthPlace,fifthPlace,sixthPlace)
    }

    const setRank=()=>{
        setRankOrder(firstPlace+","+secondPlace+","+thirdPlace+","+fourthPlace+","+fifthPlace+","+sixthPlace)
    }

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
                    <option value="chooseVisualization">Choose Visualization</option>
                    <option value="withoutVisualization">Without Visualization</option>
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
                    <option value="chooseVisualization">Choose Visualization</option>
                    <option value="withoutVisualization">Without Visualization</option>
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
                    <option value="chooseVisualization">Choose Visualization</option>
                    <option value="withoutVisualization">Without Visualization</option>
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
                    <option value="chooseVisualization">Choose Visualization</option>
                    <option value="withoutVisualization">Without Visualization</option>
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
                    <option value="chooseVisualization">Choose Visualization</option>
                    <option value="withoutVisualization">Without Visualization</option>
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
                    <option value="chooseVisualization">Choose Visualization</option>
                    <option value="withoutVisualization">Without Visualization</option>
                    <option value="gradualHighlight">Gradual Highlight</option>
                    <option value="highlight">Highlight</option>
                    <option value="increasedFont">Increased Font</option>
                    <option value="gradualFont">Gradual Font</option>
                    <option value="summaryOnly">Summary Only</option>
                </select><br/><br/><br/>


                <Link to={"/Done"}>
                    <Button variant="primary" onClick={saveFunc}>Save</Button><br/><br/><br/><br/><br/>
                </Link>

            </div>

        </Container>
    )

}