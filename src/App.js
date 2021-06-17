import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import PasswordTablePage from "./Pages/PasswordTablePage";

import PasswordCardListPage from "./Pages/PasswordCardListPage";
import GreetingComponent from "./GreetingComponent";
import { connect } from "react-redux";
import { updateUser } from "./storage/user/actions";
import { setPasswords } from "./storage/password/actions";
import axios from "axios";

function App(props) {
  useEffect(() => {
    props.setPasswords("http://localhost:5000/passwords");
  }, []);

  return (
    <>
      {props.user.name}
      <br />
      {props.user.email}
      <BrowserRouter>
        <NavLink className="btn btn-info" to="/password/table">
          ke table
        </NavLink>
        <NavLink className="btn btn-info" to="/password/card">
          ke card
        </NavLink>
        <NavLink className="btn btn-info" exact to="/">
          ke halaman tambah password
        </NavLink>
        <Switch>
          <Route path="/password/card">
            <PasswordCardListPage />
          </Route>
          <Route path="/password/table">
            <PasswordTablePage />
          </Route>
          <Route path="/greeting/:abc">
            <GreetingComponent />
          </Route>
          <Route path="/">
            <h1>Halaman tambah password</h1>
          </Route>
        </Switch>
      </BrowserRouter>
      <button
        onClick={function () {
          props.dispatch(
            updateUser({
              name: "peter",
              email: "peter@gmail.com",
            })
          );
        }}
      >
        tambah passoword
      </button>
    </>
  );
}

function mapStateToProps(state) {
  // console.log(state);
  return state;
}

const mapDispatchToProps = {
  setPasswords: setPasswords,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
