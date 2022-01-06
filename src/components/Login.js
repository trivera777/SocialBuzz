import React from "react";
import "./login.scss";
import Header from "./Header";
import { Button, Container, Navbar, Form } from "react-bootstrap";

function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
  }
  return (
    <div>
      <Header />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
          />
        </Form.Group>
        <Button rounded color="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
