import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import TestManagement from './TestManagement';
import { useAuth } from '../../model/context/auth_context';
import DeveloperNavbar from '../DeveloperNavbar';
import TextManagement from "./TextManagement";

function AuthenticatedApp() {

    return (
        <>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/create-test' component={TestManagement} />
                <Route path='/add-text' component={TextManagement} />

                {/*<Route path='/create-text' component={} />*/}
                {/*<Route path='/texts/:id' component={} />*/}
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
