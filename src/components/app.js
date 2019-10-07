import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchUI from "./Search/SearchUI";
import LoginUI from "./Login/LoginUI";
import Header from "./Header/Header";


class App extends Component {
  render() {
    return (
      <Grid className="mainGrid"> 
          <Grid item xs={12}>
            <Paper>
          <Router>
            <Header />
            <Route exact path={`/`} component={LoginUI} />
            <Route path={`/search`} component={SearchUI} />
          </Router>
        </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default App;
