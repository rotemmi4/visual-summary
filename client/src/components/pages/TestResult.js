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
    const headers = [
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
                <div >{resultTable}</div>
            </Container><br/><br/>



        </>);




}