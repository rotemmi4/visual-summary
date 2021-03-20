import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link, Route, useParams} from 'react-router-dom';
import { useAuth } from '../../model/context/auth_context';
import { CreateNewTestOptions } from './CreateNewTestOptions';
import * as testRepository from "../../repositories/TestRepository";
import { TestRow } from '../TestRow';
import {HomePage} from "./HomePage";







export default function TestManagement() {

    const allTests = testRepository.useGetAllTest()


    return (

    <div>
        <br/><br/>
        <h2 className="mb-3 text-left" >Test Management</h2><br/><br/>
        {/*<Button variant="primary"  > + Create New Test</Button><br/><br/>*/}
        {/*<Link to="/testManagement/new_test_options" component={HomePage}  >*/}
        {/*    <button variant="primary" type="button">*/}
        {/*        + Create New Test*/}
        {/*    </button><br/><br/>*/}
        {/*</Link>*/}
        <Link to="/new_test_options" className="btn btn-primary" >+ Create New Test</Link><br/><br/>
        {allTests && allTests.data ? allTests.data.map(test => (
            <TestRow testName={test.name} testType={test.type}></TestRow>
        )) : null}
        {/*<TestRow testName={"Test1"}></TestRow><br/>*/}
        {/*<TestRow testName={"Test2"}></TestRow><br/>*/}
        {/*<TestRow testName={"Test3"}></TestRow><br/>*/}
    </div>
     );
}
