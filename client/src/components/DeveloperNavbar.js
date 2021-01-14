import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../model/context/auth_context'


export default function DeveloperNavbar (){


return (
    <>
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/" class="font-weight-bold">Visual Summary</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/media">Tests</Nav.Link>
            <Nav.Link as={Link} to="/create">Upload New Text</Nav.Link>
            {/* {user ? <NavDropdown title="Actions" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/create">Add Media</NavDropdown.Item>
            </NavDropdown> : null} */}
        </Nav>
        <Nav>
            {/* {user ? <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>} */}
        </Nav>
    </Navbar>
    </>
)}