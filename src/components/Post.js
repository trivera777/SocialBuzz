import React from "react";
import './post.scss'
import { Card } from "react-bootstrap";
import { UserContext, PostContext } from "../App";

function Post({ image, content, user, id }) {
  const currentUser = React.useContext(UserContext);
  const { dispatch } = React.useContext(PostContext);
  const isCurrentUser = currentUser === user;

  function handleDeletePost() {
    dispatch({ type: "DELETE_POST", payload: { id } });
  }

  return (
    <div className="cardContainer">
      <Card className="card" style={{ width: '30rem' }}>
        {image && (
          <Card.Img
            src={URL.createObjectURL(image)}
            alt="Post cover"
          />
        )}
        <Card.Body>
          <Card.Title>
        <p>{content}</p>

          </Card.Title>

        <div className="username" style={{ color: isCurrentUser && "green" }}>{user}</div>
        <div>
          {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
        </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
