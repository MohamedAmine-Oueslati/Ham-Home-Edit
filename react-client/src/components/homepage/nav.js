import React from "react";
import "../../App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class HamNav extends React.Component {
  render() {
    return (
      <div>
        {!this.props.loggedIn ? (
          <div>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/Home">HAM Home</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/SignUp">Sign Up</Nav.Link>
              </Nav>
            </Navbar>
          </div>
        ) : (
          <div>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="/Home">HAM Home</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/SelectAction">Home</Nav.Link>
                <Nav.Link href="/ProfileView">Profile</Nav.Link>
                <Nav.Link href="/Login">Log Out</Nav.Link>
              </Nav>
            </Navbar>
          </div>
        )}
      </div>
    );
  }
}

export default HamNav;
