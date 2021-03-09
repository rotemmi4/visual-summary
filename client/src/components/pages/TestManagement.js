import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import { useAuth } from '../../model/context/auth_context';
import * as textRepository from "../../repositories/TextRepository";
import { VisualizationDisplayModal } from '../VisualizationDisplayModal';
import { TestRow } from '../TestRow';





export default function TestManagement() {
    



    return (
    <div>
        <br/><br/>
        <h2 className="mb-3 text-left" >Test Management</h2><br/><br/>
        <Button variant="primary"  > + Create New Test</Button><br/><br/>
        <TestRow testName={"Test1"}></TestRow><br/>
        <TestRow testName={"Test2"}></TestRow><br/>
        <TestRow testName={"Test3"}></TestRow><br/>
</div>
     );
}
