import React from 'react';
import '../../Layout/Layout.css';
// import { Navbar, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/img/download.jpg';
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { userLogout } from "../../api/userApi";

export const Header = () => {
  const history = useNavigate();

  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("crmSite");
    userLogout();
    history.push("/");
  };

  return (
    <Navbar className='navbar' collapseOnSelect bg="dark" variant="dark" expand="md">
        <Navbar.Brand className='logo'>
            <img src={logo} alt="logo" width="250px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tickets">
              <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>

            <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};
