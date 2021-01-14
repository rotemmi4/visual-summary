import React, { useEffect, useState } from 'react';
import { useGetAllMedia } from '../../repositories/MediaRepository';
import MediaFactory from '../MediaFactory';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import { useGetAllText } from '../../model/requests/TextModelRestAPI'
import { useAuth } from '../../model/context/auth_context';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import {TextVisualization} from "../TextVisualization";
import * as textRepository from "../../repositories/TextRepository";
import { CenteredModal } from '../CenteredModal';
import { Modal } from 'react-bootstrap';




export default function TestManagement() {
    
    const {user} = useAuth()

    const setModal = useParams()


    const { id } = useParams()
    const textById = textRepository.useGetTextById(id)
    const [modalShow,setModalShow] = useState(false)



    const [dropdown, setDropdown] = useState("0");
    // const [dropdown2, setDropdown2] = useState("0");



    const texts = textRepository.useGetAllText()


    return (
    <>
        <Container>
        <h2 className="mb-3 text-left">Test</h2>
            <Row className="justify-content-center">
                <Col></Col>
                <Col xs="9">
                    <div>
                    {<select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                        {texts && texts.data ? texts.data.map(text => (
                            <option value={text.id}>{text.name}</option>
                            )) : null}
                    </select>}
                        <Button onClick={(e)=>{setModalShow(true)}}>Choose Visualization</Button>
                    </div>
                    <div>
                    {<select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                        {texts && texts.data ? texts.data.map(text => (
                            <option value={text.id}>{text.name}</option>
                        )) : null}
                    </select>}
                    <Button onClick={(e)=>{setModalShow(true)}}>Choose Visualization</Button>
                    <CenteredModal show={modalShow} onHide={() => setModalShow(false)} text={dropdown}></CenteredModal>

                    </div>


                </Col>
                <Col></Col>
            </Row>
            </Container>
    </>);
}
