import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import TestManagement from './TestManagement';
import { useAuth } from '../../model/context/auth_context';
import DeveloperNavbar from '../DeveloperNavbar';
import TextManagement from "./TextManagement";
import DeleteText from "./DeleteTextPage"
import AddQuestion from "./AddQuestion";
import DeleteQuestion from "./DeleteQuestion";

function AuthenticatedApp() {

    return (
        <>
            <DeveloperNavbar/>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/create-test' component={TestManagement} />
                <Route path='/add-text' component={TextManagement} />
                <Route path='/delete-text' component={DeleteText} />
                {<Route path='/add-question' component={AddQuestion} />}
                {<Route path='/delete-question' component={DeleteQuestion} />}
                {/*<Route path='/texts/:id' component={} />*/}
            </Switch>
        </>
    );
}

export default AuthenticatedApp;
