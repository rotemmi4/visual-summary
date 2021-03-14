import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from "axios";
import { uploadText} from "../../model/requests/TextModelRestAPI";


export default function TextManagement() {

    const[flag, setFlag]= useState(false)
    const {register, handleSubmit} = useForm();
    const[content, setContent]= useState("");
    const[name, setName]= useState("");

    const onChange = (e) => {
        const file = e.target.files[0];
        file.text().then( filetext => {
            setContent(filetext.replace(/(\r\n|\n|\r)/gm, " "));
        }).catch( (e) => {
            console.log("")
        })
    };

    return (
        <>
            <Container>
                <h2 className="mb-3 text-left">Upload Text</h2> <br/><br/>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs="9">
                        <div>
                            <form onSubmit={handleSubmit(onsubmit)}>
                              <h4 className="mb-3 text-left">Text Name:</h4>
                               <p><input type='text' placeholder='enter text name' name= 'name' onChange={(e)=>{

                                   setName(e.target.value);
                               }} /></p><br/><br/>

                                <h4 className="mb-3 text-left">Upload Text:</h4>
                               <input type="file" required name="file" onChange={onChange}/> <br/><br/>

                                <div>
                                    <Button onClick={(e)=>{
                                        setFlag(!flag)
                                    }}> {flag?"Hide Text" : "Show Text"}</Button> <br/><br/>
                                </div>
                                <div>
                                    {flag && content}
                                </div>
                               <Button onClick={(e)=>{
                                   uploadText(name, content)
                               }}>Save</Button>
                            </form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>);
}


