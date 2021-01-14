import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import TestManagement from './TestManagement.js';
import EditTestPage from './EditTestPage';
import CreateTextPage from './CreateTextPage';
import { useAuth } from '../../model/context/auth_context';
import AppNavbar from '../Navbar';
import DisplayTextPage from './DisplayTextPage';

function AuthenticatedApp() {

    const {user, logout} = useAuth()
    return (
        <>
            <AppNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/media' component={TestManagement} />
                <Route path='/create' component={CreateTextPage} />
                <Route path='/edit/:id' component={EditTestPage} />
                <Route path='/texts/:id' component={DisplayTextPage} />
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
