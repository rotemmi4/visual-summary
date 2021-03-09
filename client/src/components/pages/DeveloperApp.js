import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import TestManagement from './TestManagement';
import { useAuth } from '../../model/context/auth_context';
import DeveloperNavbar from '../DeveloperNavbar';


function AuthenticatedApp() {

    return (
        <>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/testManagement' component={TestManagement} />


                {/*<Route path='/create-text' component={} />*/}
                {/*<Route path='/texts/:id' component={} />*/}
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
