import { Link } from "react-router-dom";
function Explore(props) {
  const { allPosts, currentUser } = props;
  return (
    <div className="explore">
      {allPosts.map((post, index) => (
        <div key={index} className="entire-post">
          <img src={post.img_url} alt={post.id} />
          <h1>{post.location}</h1>
          <h3>{post.description}</h3>
          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>Edit Me</Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
