import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {TestRow} from "../TestRow";

export default function CreateNewTestOptions() {

    const [title, setTitle] = useState('')
    let name=title

    return (
        <>
        <div>
            <h2>Create New Test</h2><br/>
            <h6>Enter a Name for the New Test and Select one of the test creation options</h6><br/>
            <label>
                Test Name:
                <input type="text" name="name"  onChange={event => setTitle(event.target.value)}/>
            </label>

            <br/><br/><br/>
            <Link  className="btn btn-light" to={{pathname:"/ChooseTextsAndVisualizations", state:{type: "new", testName:name}}}>Choose Texts and Visualizations</Link><br/><br/>
            <Link  className="btn btn-light" to={{pathname:"/GenerateRandomTextsAndChooseVisualizations", state:{type: "new", testName:name}}}>Generate Random Texts and Choose Visualizations </Link><br/><br/>
            <Link  className="btn btn-light" to={{pathname:"/GenerateRandomTextsAndRandomVisualizations", state:{type: "new", testName:name}}}>Generate Random Texts and Random Visualizations</Link><br/><br/>
        </div>

            </>);
}