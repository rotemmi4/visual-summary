import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { useAuth } from '../../model/context/auth_context';
import DeveloperNavbar from "../DeveloperNavbar";
import { StudentEntrancePage } from './StudentEntrancePage';

function UnAuthenticatedApp() {

    const {login} = useAuth()
    return (
        <>
        <Router>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/StudentEntrance' component={StudentEntrancePage} />
            </Switch>
        </Router>
        </>
    );
}

export default UnAuthenticatedApp;
