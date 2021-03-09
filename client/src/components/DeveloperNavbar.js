import React, { useState } from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../model/context/auth_context'

import * as ReactBootStrap from "react-bootstrap";



export default function DeveloperNavbar (){
    const {user, logout} = useAuth()

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

return (
    <>
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" class="font-weight-bold">Visual Summary</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user && <Nav.Link as={Link} to="/testManagement">Tests</Nav.Link>}

            {user &&
            <ReactBootStrap.NavDropdown title="Texts" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="/add-text">Upload Text</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="/add-question">Add Question</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            }
        </Nav>






        <Nav>
             {user ? <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
        </Nav>
    </Navbar>
    </>
)}