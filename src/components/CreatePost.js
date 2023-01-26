import React from "react";
import "./createpost.scss";
import { PostContext } from "../App";
import { Button, Form } from "react-bootstrap";

function CreatePost({ user }) {
  const { dispatch } = React.useContext(PostContext);
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);
  const imageInputRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: "ADD_POST", payload: { post } });
    setContent("");
    imageInputRef.current.value = "";
  }

  return (
    <div className="createContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Label>
          <h2>Create New Post</h2>
        </Form.Label>
        <Form.Control
          type="file"
          class="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <Form.Control
          type="text"
          class="text"
          placeholder="add post content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />

        <Button className="button" type="submit">
          Submit Post
        </Button>
      </Form>
    </div>
  );
}

export default CreatePost;
