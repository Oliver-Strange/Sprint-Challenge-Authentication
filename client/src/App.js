import React from "react";
import "./App.css";

import { NavLink, Route, withRouter } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import Jokes from "./components/jokes/Jokes.jsx";
import Register from "./components/auth/Register.jsx";

function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };
  return (
    <div className="App">
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/jokes">Jokes</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          &nbsp;|&nbsp;
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/register" component={Register} />
      </main>
    </div>
  );
}

export default withRouter(App);
