import React, { Component } from "react";
// import axios from "axios";
import Button from "@material-ui/core/Button";
import { PostData } from "../Services/postData";
import CircularProgress from '@material-ui/core/CircularProgress';


class LoginUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passwordEntered: "",
      isLoggedIn: false,
      isloading: false
    };
  }

  onUserNameChange = e => {
    this.setState({
      userName: e.target.value
    });
  };

  onPasswordChange = e => {
    this.setState({
      passwordEntered: e.target.value
    });
  };

  onInputSubmit = e => {
    e.preventDefault();
    this.setState({
      isloading: true
    })

    PostData(this.state).then(result => {
      document.getElementById("status").innerHTML =  null
      let responseJson = result;
      const user = responseJson.results;
      // const password = responseJson.results[0].birth_year;
      // console.log(user)
      const userName = this.state.userName;
      //console.log(userName)
      const passwordEntered = this.state.passwordEntered;

      if (userName === "" && passwordEntered === "") {
        document.getElementById("status").innerHTML =
          "<p>Please Enter a valid Username and Password</p>";
          this.setState({
            isloading: false
          })
      } else {
        for (var i in user) {
          if (
            user[i].name === userName &&
            user[i].birth_year === passwordEntered
          ) {
            console.log("valid");
            document.getElementById("status").innerHTML =  null;
            this.props.history.push("/search");
          }
        }
      }
    });
  };

  render() {
    return (
      <div className="innerGrid">
        <h1>Login</h1>

        <div className="InputContainer">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            value={this.state.userName}
            id="userName"
            onChange={this.onUserNameChange}
          />
        </div>

        <div className="InputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={this.state.passwordEntered}
            id="password"
            onChange={this.onPasswordChange}
          />
        </div>

        <span className="validation" id="status"></span>
        <Button
          variant="contained"
          color="primary"
          onClick={this.onInputSubmit}
        >
          Login
        </Button>
       {
         this.state.isloading ?  <CircularProgress className="progress" /> : null }
       
      </div>
    );
  }
}

export default LoginUI;
