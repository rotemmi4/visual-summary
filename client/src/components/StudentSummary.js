import React, { useState} from "react";
import {Container, Form} from 'react-bootstrap'
import {saveStudentSummary} from "../model/requests/StudentModelRestAPI";
import { Button } from 'react-bootstrap'




export function StudentSummary(props){

    const text_id = props.text_id;
    const text = props.text;
    const text_type = props.type;
    let student_id= localStorage.getItem('student_id')

    // this.state = {value: ''};
    // this.handleChange = this.handleChange.bind(this);
    const [textValue,setTextValue] = useState("");

    const set_student_summary = () => {
        // Send this to DB
        console.log(textValue);
        saveStudentSummary(student_id,text_id,textValue);
    }

    function handleChange(event) {
        setTextValue(event.target.value);
    }


    return (
        <Container style={{textAlign: 'center'}}>
            <h1>Summary</h1>
            <br/>
            <br/>
            <br/>
            <Form>
                <Form.Group controlId="ControlTextarea">
                    <Form.Label>Now you will need to summarize the text you have read, Please write the summary in english.</Form.Label>
                    <Form.Control as="textarea" rows={10} value={textValue} onChange={handleChange} />
                </Form.Group>
            </Form>
            <br/>
            <Button variant="outline-success" onClick={() => {set_student_summary(); props.moveToQuestions();}}>Submit</Button>
        </Container>

    )
}