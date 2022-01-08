import React from "react";
import "./header.scss";
import { Navbar, Container, Button } from "react-bootstrap";

function Header({ user, setUser }) {
  return (
    <Navbar className="navbar">
      <Container>
        <h1>Social Media App</h1>
        <Navbar.Text className="welcome">Welcome, {user}!</Navbar.Text>
      </Container>
      <Button variant="danger" onClick={() => setUser("")}>
        logout
      </Button>
    </Navbar>
  );
}

export default Header;
