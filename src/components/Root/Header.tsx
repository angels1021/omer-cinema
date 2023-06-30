import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import { HeaderTools } from "./HeaderTools";

const Header = () => (
    <header>
        <Navbar expand="lg" className="bg-body-primary">
            <Container className="d-flex">
                <Navbar.Brand as={NavLink} to="/">Omer Cinema</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="w-100">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <HeaderTools />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
);

export default Header;