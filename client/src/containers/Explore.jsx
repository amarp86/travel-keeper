import { Link } from "react-router-dom";
import { createLike } from "../services/likes";
import { useState, useEffect } from "react";

function Explore(props) {
  const { allPosts, currentUser, handleDelete } = props;
  const [toggle, setToggle] = useState(false);
  const [allLikes, setAllLikes] = useState([]);

  useEffect(() => {
    const countLikes = () => {
      allPosts.map((post, index) => setAllLikes(post.likes.length));
    };
    countLikes();
  }, [toggle, allLikes]);

  return (
    <div className="explore">
      {allPosts.map((post, index) => (
        <div key={index} className="individual-post">
          <img src={post.img_url} alt={post.id} />

          <h1>{post.user.name}</h1>
          <h2>{post.location}</h2>
          <h3>{post.description}</h3>
          <div className="comments-section">
            {post.comments.map((comment, index) => (
              <p key={index}>{comment.content}</p>
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
              <button
                onClick={() => {
                  createLike(post.id, {
                    post_id: post.id,
                    user_id: currentUser.id,
                  });
                  setToggle(!toggle);
                }}
              >
                Like
              </button>
              <h3>{post.likes.length}</h3>
              {console.log(post)}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
