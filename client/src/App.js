import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Explore from "./containers/Explore";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PostCreate from "./screens/PostCreate";
import PostEdit from "./screens/PostEdit";
import Home from "./components/Home";
import { getAllPosts, putPost, destroyPost } from "./services/posts";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();

    const getPosts = async () => {
      const posts = await getAllPosts();
      setAllPosts(posts);
    };
    getPosts();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };
  const handleUpdate = async (id, formData) => {
    const updatedPost = await putPost(id, formData);
    setAllPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? updatedPost : post;
      })
    );
    history.push("/explore");
  };
  const handleDelete = async (id) => {
    await destroyPost(id);
    setAllPosts((prevState) => prevState.filter((food) => food.id !== id));
  };
  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/explore">
            <Explore
              allPosts={allPosts}
              currentUser={currentUser}
              handleDelete={handleDelete}
            />
          </Route>
          <Route path="/createpost">
            <PostCreate currentUser={currentUser} setAllPosts={setAllPosts} />
          </Route>
          <Route path="/posts/:id/edit">
            <PostEdit allPosts={allPosts} handleUpdate={handleUpdate} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
