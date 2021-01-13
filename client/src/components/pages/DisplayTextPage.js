import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetMediaById } from '../../model/requests/MediaModelRestAPI';
import {TextVisualitaion} from '../TextVisualitaion'
import * as textRepository from '../../repositories/TextRepository'
import Button from 'react-bootstrap/Button';
import {Container, Row} from "react-bootstrap";


export default function DisplayTextPage(){

    const { id } = useParams()
    const text = textRepository.useGetTextWeights(id)
    const [type, setType] = useState("Without Visualization");


    return(
        <>

                <Container>
                    <Row className="mt-5 justify-content-center align-items-center">
                        <h3>Radio button is : {type}</h3>
                        <input type="radio" checked={type === "Without Visualization"} value="Without Visualization" onChange={(e)=>{setType(e.target.value)}}/>
                        <label>Without Visualization</label>
                        <input type="radio" checked={type === "Gradual Highlight"} value="Gradual Highlight" onChange={(e)=>{setType(e.target.value)}}/>
                        <label>Gradual Highlight</label>
                        <input type="radio" checked={type === "Gradual Font"} value="Gradual Font" onChange={(e)=>{setType(e.target.value)}}/>
                        <label>Gradual Font</label>
                        <input type="radio" checked={type === "Summary Only"} value="Summary Only" onChange={(e)=>{setType(e.target.value)}}/>
                        <label>Summary Only</label>
                    </Row>
                    <Row className="justify-content-center align-items-center">
                        {text && text.data ? <TextVisualitaion sentences={text.data.sentences} type={type} /*type={type}*/ name={text.data.name}/> : null}
                    </Row>
                </Container>
                {/* <h1>Drop Down Value is : {dropdown}</h1> */}
                {/* <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
                <option value="banana">Banana</option>
            </select> */}

                {/* radio buttons every change in radio button change type*/}




        </>
    )










}