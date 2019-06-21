import React from "react";
import axios from "axios";
import styled from "styled-components";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/register", this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledDiv>
          <label htmlFor="username">Username </label>
          <StyledInput
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            id="username"
            type="text"
          />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="password">Password </label>
          <StyledInput
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            id="password"
            type="password"
          />
        </StyledDiv>
        <StyledDiv>
          <StyledButton type="submit">Register</StyledButton>
        </StyledDiv>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 50px auto;
  padding: 10px;
  background-color: lightgrey;
  border-radius: 8px;
`;

const StyledDiv = styled.div`
  margin: 5px;
`;

const StyledInput = styled.input`
  border-style: none;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  border-style: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default Login;
