import React, {useState} from 'react'
import {Button, Container, Form, Modal} from "react-bootstrap";
import {TextDisplayModal} from "../TextDisplayModel";
import {addQuestion} from "../../model/requests/TextModelRestAPI";
import * as testRepository from "../../repositories/TestRepository";

export default function TestResult() {

    const allTests = testRepository.useGetAllTest()
    const [testName, setTestName] = useState()




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
                </div>
            </Container>
        </>);




}