import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { useAuth } from '../../model/context/auth_context';
import AppNavbar from '../Navbar';

function UnAuthenticatedApp() {

    const {login, register} = useAuth()
    return (
        <>
        <Router>
            <AppNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/login' component={LoginPage} />
            </Switch>
        </Router>
        </>
    );
}

export default UnAuthenticatedApp;
