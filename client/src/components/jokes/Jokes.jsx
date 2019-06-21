import React from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";
import styled from "styled-components";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    axios
      .get("/jokes")
      .then(res => {
        console.log(res);
        this.setState({
          jokes: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.jokes.length === 0) {
      return <StyledDiv>Loading..</StyledDiv>;
    }
    return (
      <>
        <StyledH2>Have some dad jokes!</StyledH2>
        <StyledUl>
          {this.state.jokes.map(joke => (
            <StyledLi key={joke.id}>{joke.joke}</StyledLi>
          ))}
        </StyledUl>
      </>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  margin: 50px auto;
`;

const StyledH2 = styled.h2`
  display: flex;
  justify-content: center;
  width: 95%;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 10px;
`;

const StyledLi = styled.li`
  display: flex;
  font-size: 1.2rem;
  flex-wrap: wrap;
  margin: 10px;
`;

export default requiresAuth(Jokes);
