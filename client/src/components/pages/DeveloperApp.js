import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import TestManagement from './TestManagement';
import { useAuth } from '../../model/context/auth_context';
import DeveloperNavbar from '../DeveloperNavbar';
import CreateNewTestOptions from "./CreateNewTestOptions";
import ChooseTestAndVisualization from "./ChooseTestAndVisualization";
import GenerateRandomTextsAndChooseVisualization from "./GenerateRandomTextAndChooseVisualization";
import GenerateRandomTextAndRandomVisualization from "./GenerateRandomTextAndRandomVisualization";

function AuthenticatedApp() {

    return (
        <>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/testManagement' component={TestManagement} />
                <Route path='/new_test_options' component={CreateNewTestOptions} />
                <Route path='/ChooseTextsAndVisualizations' component={ChooseTestAndVisualization} />
                <Route path='/GenerateRandomTextsAndChooseVisualizations' component={GenerateRandomTextsAndChooseVisualization} />
                <Route path='/GenerateRandomTextsAndRandomVisualizations' component={GenerateRandomTextAndRandomVisualization} />


                {/*<Route path='/create-text' component={} />*/}
                {/*<Route path='/texts/:id' component={} />*/}
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
