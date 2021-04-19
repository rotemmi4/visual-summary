import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Modal, Row} from 'react-bootstrap';
import './HomePage.css';
import StarRating from "./StarRating";
import ImageSlider from "./ImageSlider";
import {SliderData} from "./SliderData";


export default function RankPage() {


    return (

        <Container className="w-80 center">

            <Row className="mb-3 justify-content-center align-items-center">
                <h2 className="block">Please rank the visualizations</h2>
            </Row>


            <div className="pics">
                <row >
                    <h3 className="block">Highlight</h3>
                    <img src={"/images/highlight.PNG"} alt=""/>
                    <StarRating></StarRating>

                    <h3 className="block">Gradual Highlight</h3>
                    <img src={"/images/gradualHighlight.PNG"} alt=""/>
                    <StarRating></StarRating>

                    <h3 className="block">Increased Font</h3>
                    <img src={"/images/Increased Font.PNG"} alt=""/>
                    <StarRating></StarRating>

                    <h3 className="block">Gradual Font</h3>
                    <img src={"/images/Gradual Font.PNG"} alt=""/>
                    <StarRating></StarRating>

                    <h3 className="block">Summary</h3>
                    <img src={"/images/sammary.PNG"} alt=""/>
                    <StarRating></StarRating>

                    <h3 className="block">Without Visualization</h3>

                    <StarRating></StarRating>


                </row>


            </div>

        </Container>
        )

}