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
import TextManagement from "./TextManagement";
import DeleteText from "./DeleteTextPage"
import AddQuestion from "./AddQuestion";
import DeleteQuestion from "./DeleteQuestion";
import TestResult from "./TestResult"
import RankPage from "./RankPage";

function AuthenticatedApp() {

    return (
        <>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/testManagement' component={TestManagement} />
                <Route path='/new_test_options' component={CreateNewTestOptions} />
                <Route path='/add-text' component={TextManagement} />
                <Route path='/result' component={TestResult} />
                <Route path='/delete-text' component={DeleteText} />
                {<Route path='/add-question' component={AddQuestion} />}
                {<Route path='/delete-question' component={DeleteQuestion} />}
                {/*<Route path='/texts/:id' component={} />*/}
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
