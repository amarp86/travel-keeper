import { Link } from "react-router-dom";

import { addComment } from "../services/comments";
import { useState, useEffect } from "react";
import { getAllPosts } from "../services/posts";
import Likes from "../components/Likes";

function Explore(props) {
  const { currentUser, handleDelete } = props;

  const [currentPosts, setCurrentPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getAllPosts();
      setCurrentPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <div className="explore">
      {currentPosts.map((post, index) => (
        <div key={index} className="individual-post">
          <img src={post.img_url} alt={post.id} />

          <h1>{post.user.name}</h1>
          <h2>{post.location}</h2>
          <h3>{post.description}</h3>
          <div className="comments-section">
            {post.comments.map((comment, index) => (
              <p key={index}>
                {post.user.name} says {comment.content}
              </p>
            ))}
          </div>

          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </>
          )}
          {currentUser?.id !== post.user_id && (
            <>
              <Likes allLikes={post.likes} postId={post.id} />
              <button
                onClick={() =>
                  addComment(post.id, {
                    post_id: post.id,
                    user_id: currentUser.id,
                  })
                }
              >
                Add Comment
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
