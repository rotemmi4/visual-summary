import React, { useEffect, useState } from 'react';
import { useGetAllMedia } from '../../repositories/MediaRepository';
import MediaFactory from '../MediaFactory';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetAllText } from '../../model/requests/TextModelRestAPI'
import { useAuth } from '../../model/context/auth_context';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import {TextVisualitaion} from "../TextVisualitaion";
import * as textRepository from "../../repositories/TextRepository";



export default function MediaManagment() {
    
    const {user} = useAuth()

    const texts = textRepository.useGetAllText()


    return (
    <>
        <Container>
        <h2 className="mb-3 text-left">Test</h2>
            <Row className="justify-content-center">
                <Col></Col>
                <Col xs="9">
                    <DropdownButton id="dropdown-basic-button" title="Choose Text">
                        {texts && texts.data ? texts.data.map(text => (
                             <Dropdown.Item href="#/action-1">{text.name}</Dropdown.Item>
                    )) : null}
                    </DropdownButton>

                </Col>
                <Col></Col>
            </Row>
            </Container>
    </>);
}
