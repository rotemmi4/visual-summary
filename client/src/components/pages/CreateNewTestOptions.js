import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {TestRow} from "../TestRow";

export default function CreateNewTestOptions() {

    return (
        <>
        <div>
            <h2>Create New Test</h2><br/>
            <h6>Enter a Name for the New Test andSelect one of the test creation options</h6><br/>
            <label>
                Test Name:
                <input type="text" name="name" />
            </label>
            <br/><br/><br/>
            <Link to="/ChooseTextsAndVisualizations" className="btn btn-light" >Choose Texts and Visualizations</Link><br/><br/>
            <Link to="/GenerateRandomTextsAndChooseVisualizations" className="btn btn-light">Generate Random Texts and Choose Visualizations </Link><br/><br/>
            <Link to="/GenerateRandomTextsAndRandomVisualizations" className="btn btn-light">Generate Random Texts and Random Visualizations</Link><br/><br/>

        </div>

            </>);
}