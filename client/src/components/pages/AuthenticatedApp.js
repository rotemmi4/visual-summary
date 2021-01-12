import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import MediaManagment from './MediaManagment';
import EditMediaPage from './EditMediaPage';
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
                <Route path='/media' component={MediaManagment} />
                <Route path='/create' component={CreateTextPage} />
                <Route path='/edit/:id' component={EditMediaPage} />
                <Route path='/texts/:id' component={DisplayTextPage} />
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
