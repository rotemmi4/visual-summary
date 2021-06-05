import React, { useState} from "react";
import {Container, Form} from 'react-bootstrap'
import {saveStudentSummary} from "../model/requests/StudentModelRestAPI";
import { Button } from 'react-bootstrap'




export function StudentSummary(props){

    const text_id = props.text_id;
    const text = props.text;
    const text_type = props.type;
    let student_id= localStorage.getItem('student_id');
    const readingTime = props.readingTime;
    const startSummary = new Date();

    const [textValue,setTextValue] = useState("");

    const set_student_summary = () => {
        let endTimeSummary = new Date();
        endTimeSummary = endTimeSummary - startSummary;
        endTimeSummary /= 1000;
        saveStudentSummary(student_id,text_id,textValue, readingTime, endTimeSummary);
    }

    function handleChange(event) {
        setTextValue(event.target.value);
    }


    return (
        <Container style={{overflowY:"auto" ,textAlign: 'center', width:"120%"}}>
            <h1>Summary</h1>
            <br/>

            <Form>
                <Form.Group controlId="ControlTextarea">
                    <Form.Label><b>Now you will need to summarize the text you have read, Please write copy most important sentences from the text</b> <br/> *Length - need to be 7-10 sentences.</Form.Label>
                    <Form.Control style={{width:"100%"}} as="textarea" rows={18} value={textValue} onChange={handleChange} />
                </Form.Group>
            </Form>
            <br/>

            <Button variant="outline-success" onClick={() => {set_student_summary(); props.moveToQuestions();}}>Submit</Button>
            <br/>
            <br/>
        </Container>

    )
}