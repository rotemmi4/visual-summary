import React, { useState } from 'react';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../model/context/auth_context'



export default function DeveloperNavbar (){

    const {user, logout} = useAuth()
    const [open, setOpen] = useState(false);

return (
    <>
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" class="font-weight-bold">Visual Summary</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user && <Nav.Link as={Link} to="/create-test">Tests</Nav.Link>}

            {user && <Nav.Link as={Link} to="/add-text" >Texts </Nav.Link>}



        </Nav>
        <Nav>
             {user ? <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
        </Nav>
    </Navbar>
    </>
)}