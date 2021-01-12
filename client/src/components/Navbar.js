import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../model/context/auth_context'


export default function AppNavbar (){

const {user, logout} = useAuth()

return (
    <>
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Grand Media</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user ? <Nav.Link as={Link} to="/media">Media</Nav.Link> : null}
            {user ? <Nav.Link as={Link} to="/create">Upload New Text</Nav.Link> : null}
            {/* {user ? <NavDropdown title="Actions" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/create">Add Media</NavDropdown.Item>
            </NavDropdown> : null} */}
        </Nav>
        <Nav>
            {user ? <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
        </Nav>
    </Navbar>
    </>
)}