import React from "react";
import "./App.css";
import styled from "styled-components";

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
        <StyledNav>
          <StyledNavLink to="/register">Register</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/jokes">Jokes</StyledNavLink>
          <StyledLogoutButton onClick={logout}>Logout</StyledLogoutButton>
        </StyledNav>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
        <Route path="/register" component={Register} />
      </main>
    </div>
  );
}

const StyledNav = styled.nav`
  display: flex;
  width: 90%;
  justify-content: center;
  font-size: 2rem;
  margin: 10px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 0 20px;
  padding: 10px;
`;

const StyledLogoutButton = styled.button`
  border-radius: 8px;
  background-color: #555555;
  color: white;
  border: none;
  text-decoration: none;
  text-align: center;
  margin: 4px;
  &:hover {
    cursor: pointer;
  }
`;

export default withRouter(App);
