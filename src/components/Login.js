import React from "react";
import "./login.scss";
import { Button, Form } from "react-bootstrap";
import Divider from "@mui/material/Divider";

function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setUser(username);
  }
  return (
    <div>
      <h1>Social Buzz</h1>
      <Divider style={{ color: "white" }} />
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <h2 style={{ color: "#EEEEEE" }}>Login</h2>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#3A4750 " }}>Username</Form.Label>
            <Form.Control
            style={{width: '85%'}}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
            />
          </Form.Group>
          <Button className="button" rounded type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
