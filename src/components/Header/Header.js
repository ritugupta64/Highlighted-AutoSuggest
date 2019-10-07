import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="headerContainer">
       
        <NavLink exact to="/" activeClassName = "is_active">Login</NavLink>
        <NavLink exact to="/Highlighted-AutoSuggest" activeClassName = "is_active">Login</NavLink>
        
        <NavLink to="/search" activeClassName = "is_active">Search</NavLink>
      </Toolbar>
    </AppBar>
  );
}
