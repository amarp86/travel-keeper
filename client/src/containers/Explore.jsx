import { Link } from "react-router-dom";

function Explore(props) {
  const { allPosts, currentUser, handleDelete } = props;

  return (
    <div className="explore">
      {allPosts.map((post, index) => (
        <div key={index} className="individual-post">
          <img src={post.img_url} alt={post.id} />
          <h1>{post.user.name}</h1>
          <h2>{post.location}</h2>
          <h3>{post.description}</h3>

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
              <button>Like</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
