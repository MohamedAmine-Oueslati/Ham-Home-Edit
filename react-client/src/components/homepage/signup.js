import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import HamNav from "./nav";

class SignUp extends Component {
  render() {
    return (
      <div>
        <HamNav loggedIn={false} />
        <div className="design">
          <form className="home">
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <Link to={"/SelectAction"}>
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </Link>
            <p className="forgot-password text-right">
              Already registered <a href="/Login">sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
