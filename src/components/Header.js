import React from "react";
import './header.scss'
import { Navbar, Container, Button } from "react-bootstrap";

function Header({ user, setUser }) {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Social Media App</Navbar.Brand>
      </Container>
      <Navbar.Toggle />
      <Navbar.Text className="welcome">
        welcome, {user}!
      </Navbar.Text>
      <Button variant="danger" onClick={() => setUser("")}>
        logout
      </Button>
    </Navbar>
  );
}

export default Header;
