import React, { Component } from "react";
import { Link } from "react-router-dom";
import HamNav from "./nav";

class Login extends Component {

  render() {
    return (
      <div>
        <HamNav loggedIn={false} />
        <form className="home">
          <h3>Sign In</h3>

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
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <Link to={"/SelectAction"}>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </Link>
          <p className="forgot-password text-right">
            Forgot <a href="/Login">password?</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
