import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import TestManagement from './TestManagement';
import EditTestPage from './EditTestPage';
import CreateTextPage from './CreateTextPage';
import { useAuth } from '../../model/context/auth_context';
import DeveloperNavbar from '../DeveloperNavbar';
import DisplayTextPage from './DisplayTextPage';

function AuthenticatedApp() {

    return (
        <>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/create-test' component={TestManagement} />
                <Route path='/create-text' component={CreateTextPage} />
                <Route path='/texts/:id' component={DisplayTextPage} />
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
