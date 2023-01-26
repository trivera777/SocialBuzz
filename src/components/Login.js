import React from "react";
import "./login.scss";
import { Button, Form } from "react-bootstrap";
import Divider from "@mui/material/Divider";

//object destructuring
function Login({ setUser }) {
  const [username, setUsername] = React.useState("");

  //prevents default behavior - page does not refresh when form is submitted
  function handleSubmit(event) {
    event.preventDefault();
    //passes upated username vaule to setUser prop
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
