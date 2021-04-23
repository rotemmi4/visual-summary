import React, {useState} from 'react'
import {Button, Container, Form, Modal} from "react-bootstrap";
import {TextDisplayModal} from "../TextDisplayModel";
import * as testRepository from "../../repositories/TestRepository";
import * as resultRepository from "../../repositories/ResultRepository";
import {AddTextModal} from "../AddTextModal";
import {CSVLink} from "react-csv";

export default function TestResult() {

    const allTests = testRepository.useGetAllTest()
    const [testName, setTestName] = useState()
    const test_result = resultRepository.useGetTestResult(testName)
    const [show, setShow] = useState(false);
    const [summary, setSummary] = useState("");

    //CSV FILE
    const headers= [
        { label: "Date", key: "Timestamp" },
        { label: "Student ID", key: "studentID" },
        { label: "Age", key: "studentAge" },
        { label: "Gender", key: "studentGender" },
        { label: "Text ID", key: "text_id" },
        { label: "Visualization", key: "type" },
        { label: "Property Name", key: "property_name" },
        { label: "Property Value", key: "property_value" },
        { label: "Question ID", key: "question_id" },
        { label: "Is Correct", key: "is_correct" },
        { label: "Time to Answer", key: "time_to_answer" },
        { label: "Summary", key: "Summary" }
    ];
    const data = test_result.data

    const csvReport = {
        data: data,
        headers: headers,
        filename: testName+'_Results.csv'
    };

    let resultTable
    if(testName != null){
        resultTable = <div>
            <h4>Students Results For {testName}</h4>
            <CSVLink {...csvReport} target="_blank">Export to CSV</CSVLink><br/><br/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Text ID</th>
                    <th scope="col">Visualization</th>
                    <th scope="col">Property Name</th>
                    <th scope="col">Property Value</th>
                    <th scope="col">Question ID</th>
                    <th scope="col">Is Correct</th>
                    <th scope="col">Time to Answer</th>
                    <th scope="col">Summary</th>
                </tr>
                </thead>
                <tbody>
                {test_result && test_result.data ? test_result.data.map((result) => (
                    <tr>
                        <td>{result.Timestamp}</td>
                        <td>{result.studentID}</td>
                        <td>{result.studentAge}</td>
                        <td>{result.studentGender}</td>
                        <td>{result.text_id}</td>
                        <td>{result.type}</td>
                        <td>{result.property_name}</td>
                        <td>{result.property_value}</td>
                        <td>{result.question_id}</td>
                        <td>{result.is_correct}</td>
                        <td>{result.time_to_answer}</td>
                        <td> <Button variant="primary" onClick={(e)=>{setShow(true);setSummary(result.Summary)}}>Show Summary</Button>
                            <AddTextModal show={show} onHide={() => {
                                setShow(false)
                            }} text={summary}></AddTextModal></td>
                    </tr>
                )) : null}


                </tbody>
            </table></div>
    }


    const test_placing_result = resultRepository.useGetTestRankingResult(testName)
    const headers_placing= [
        { label: "Student ID", key: "student_id" },
        { label: "Without Visualization Rank", key: "withoutVisualization_rank" },
        { label: "Gradual Highlight Rank", key: "gradualHighlight_rank" },
        { label: "Highlight Rank", key: "highlight_rank" },
        { label: "Increased Font Rank", key: "increasedFont_rank" },
        { label: "Gradual Font Rank", key: "gradualFont_rank" },
        { label: "Summary Only Rank", key: "summaryOnly_rank" },
        { label: "Without Visualization Place", key: "withoutVisualization_place" },
        { label: "Gradual Highlight Place", key: "gradualHighlight_place" },
        { label: "Highlight Place", key: "highlight_place" },
        { label: "Increased Font Place", key: "increasedFont_place" },
        { label: "Gradual Font Place", key: "gradualFont_place" },
        { label: "Summary Only Place", key: "summaryOnly_place" },

    ];
    const data_placing = test_placing_result.data

    const csvReport2 = {
        data: data_placing,
        headers: headers_placing,
        filename: testName+'_Ranking_Results.csv'
    };

    let resultTable2
    if(testName != null){
        resultTable2 = <div>
            <h4>Students Ranking Results For {testName}</h4>
            <CSVLink {...csvReport2} target="_blank">Export to CSV For Ranking Results</CSVLink><br/><br/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">Without Visualization Rank</th>
                    <th scope="col">Gradual Highlight Rank</th>
                    <th scope="col">Highlight Rank</th>
                    <th scope="col">Increased Font Rank</th>
                    <th scope="col">Gradual Font Rank</th>
                    <th scope="col">Summary Only Rank</th>
                    <th scope="col">Without Visualization Place</th>
                    <th scope="col">Gradual Highlight Place</th>
                    <th scope="col">Highlight Place</th>
                    <th scope="col">Increased Font Place</th>
                    <th scope="col">Gradual Font Place</th>
                    <th scope="col">Summary Only Place</th>
                </tr>
                </thead>
                <tbody>
                {test_placing_result && test_placing_result.data ? test_placing_result.data.map((rank) => (
                    <tr>
                        <td>{rank.student_id}</td>
                        <td>{rank.withoutVisualization_rank}</td>
                        <td>{rank.gradualHighlight_rank}</td>
                        <td>{rank.highlight_rank}</td>
                        <td>{rank.increasedFont_rank}</td>
                        <td>{rank.gradualFont_rank}</td>
                        <td>{rank.summaryOnly_rank}</td>
                        <td>{rank.WithoutVisualization_place}</td>
                        <td>{rank.gradualHighlight_place}</td>
                        <td>{rank.highlight_place}</td>
                        <td>{rank.increasedFont_place}</td>
                        <td>{rank.gradualFont_place}</td>
                        <td>{rank.summaryOnly_place}</td>
                    </tr>
                )) : null}
                </tbody>
            </table></div>
    }



    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Results</h2>
                <div className="row">
                    <div className="col-sm">
                        <h4 className="mb-3 text-left">Choose Test:</h4>
                        <Form>
                            <div>
                                <select defaultValue={-1} onChange={(e)=>setTestName(e.target.value)}>
                                    <option disabled value={-1} hidden> -- select an option -- </option>
                                    {allTests && allTests.data ? allTests.data.map(test => (
                                        <option key={test.name} value={test.name}>{test.name}</option>
                                    )) : null}
                                </select>

                            </div>
                        </Form>
                    </div>
                </div><br/><br/>
                <div>
                    {resultTable}
                </div>
                <div>
                    {resultTable2}
                </div>
            </Container><br/><br/>



        </>);




}