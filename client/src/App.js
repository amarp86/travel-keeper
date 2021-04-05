import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Explore from "./containers/Explore";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PostCreate from "./screens/Create/PostCreate";
import PostEdit from "./screens/Edit/PostEdit";
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
  const [toggle, setToggle] = useState(false);

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
  }, [toggle]);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/explore");
  };

  const handleRegister = async (formData) => {
    if (formData.password === formData.verify) {
      const userData = await registerUser(formData);
      setCurrentUser(userData);
      history.push("/");
    } else {
      alert("Passwords Do Not Match");
    }
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
    setAllPosts((prevState) => prevState.filter((post) => post.id !== id));
    history.push("/explore");
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
              setToggle={setToggle}
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
