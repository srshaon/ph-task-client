import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                bg="dark"
                variant="dark"
                className="header-container sticky-top"
                style={{ height: "80px" }}
            >
                <Container>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="menu-bg ms-auto">
                            <NavLink to="/home" className="menu-text">
                                Home
                            </NavLink>
                            <NavLink to="/medias" className="menu-text">
                                Media
                            </NavLink>
                            <NavLink to="/message" className="menu-text">
                                Message
                            </NavLink>
                            <NavLink to="/about" className="menu-text">
                                About
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;
