import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {PostData} from "../Services/postData";

class LoginUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // login = user => {
  //   return axios
  //     .post("https://swapi.co/api/people", {
  //       userName: user.name,
  //       password: user.birth_year
  //     })
  //     .then(response => {
  //       localStorage.setItem("usertoken", response.data);
  //       return response.data;
  //     })

  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  onInputSubmit = e => {
    e.preventDefault();
    // const loginDetails = {
    //   userName: this.state.userName,
    //   password: this.state.password
    // };

    // this.login(loginDetails).then(res => {
    //   if (res) {
    //     console.log(res);
    //     this.props.history.push("/search");
    //   }
    // });
   // console.log(this.state)
    PostData(this.state).then((result) => {
      let responseJson = result
      console.log(responseJson)
    })
  };

  render() {
    return (
      <div className="innerGrid">
        <h1>Login</h1>

        <div className="InputContainer">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name={this.state.userName}
            id="userName"
            onChange={this.onInputChange}
          />
        </div>

        <div className="InputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name={this.state.password}
            id="password"
            onChange={this.onInputChange}
          />
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={this.onInputSubmit}
        >
          Login
        </Button>
      </div>
    );
  }
}

export default LoginUI;
