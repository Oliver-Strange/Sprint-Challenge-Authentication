import React from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

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
      return <div>Loading..</div>;
    }
    return (
      <>
        <h2>Have some dad jokes!</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default requiresAuth(Jokes);
