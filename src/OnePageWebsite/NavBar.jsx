import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <Navbar className="navbar d-flex flex-row" expand="sm" bg="dark" fixed="top">
      <Navbar.Brand href="#home" className="navbar-brand">
        <h1>Social App</h1>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" /> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler">
        <div>
          <GiHamburgerMenu style={{ color: "white", fontSize: "1.75rem" }} />
        </div>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-items">
          <Nav.Item>
            <Nav.Link className="nav-link" href="/home">
              <p>Explore</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="/home">
              <p>Create</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="nav-link" href="/home">
              <p>Share</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
