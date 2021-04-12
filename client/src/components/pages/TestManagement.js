import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import { useAuth } from '../../model/context/auth_context';
import * as textRepository from "../../repositories/TextRepository";
import { VisualizationDisplayModal } from '../VisualizationDisplayModal';
import {TestRow} from "../TestRow";
import * as testRepository from "../../repositories/TestRepository";




export default function TestManagement() {
    
    const {user} = useAuth()

    const allTests = testRepository.useGetAllTest()


    const { id } = useParams()



    return (

    <div>
        <br/><br/>
        <h2 className="mb-3 text-left" >Test Management</h2><br/><br/>
        <Link to="/new_test_options" className="btn btn-primary" >+ Create New Test</Link><br/><br/>
        {allTests && allTests.data ? allTests.data.map(test => (
            <TestRow testName={test.name} testType={test.type}></TestRow>
        )) : null}
    </div>
     );
}
