import { Link } from "react-router-dom";
import "./Explore.css";
import { useState, useEffect } from "react";
import { getAllPosts } from "../services/posts";
import Likes from "../components/Likes";
import NewComment from "../components/NewComment";

function Explore(props) {
  const { currentUser, handleDelete, allPosts, setToggle } = props;

  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts();
      setCurrentPosts(posts);
    };

    getPosts();
  }, [allPosts]);

  return (
    <div className="explore-entire-area">
      {currentPosts.map((post, index) => (
        <div key={index} className="each-full-post">
          <img className="picture" src={post.img_url} alt={post.id} />

          <div className="post-details">
            <h1>{post.user.name}</h1>
            <h2>{post.location}</h2>
            <h3>{post.description}</h3>
          </div>
          <div className="comments-section">
            {post.comments.map((comment, index) => (
              <p key={index}>
                {comment.user.name} says {comment.content}
              </p>
            ))}
          </div>

          {currentUser && currentUser?.id === post.user_id && (
            <>
              <div className="button-container">
                <Link to={`/posts/${post.id}/edit`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="new-comment">
                <NewComment
                  allComments={post.comments}
                  postId={post.id}
                  currentUser={currentUser}
                  setToggle={setToggle}
                />
              </div>
            </>
          )}
          {currentUser && currentUser?.id !== post.user_id && (
            <>
              <div className="likes-area">
                <Likes allLikes={post.likes} postId={post.id} />
              </div>
              <div className="new-comment">
                <NewComment
                  allComments={post.comments}
                  postId={post.id}
                  currentUser={currentUser}
                  setToggle={setToggle}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
