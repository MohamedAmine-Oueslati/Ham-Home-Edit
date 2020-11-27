import React from "react";
import HamNav from "./nav";
import logo from "./logo.png";
import "../../App.css";
// import ReactDOM from "react-dom";

class Home extends React.Component {

  render() {
    return (
        <div>
        <HamNav loggedIn={false} />
        <img id="logo" src={logo} />
        </div>
    );
  }

}

export default Home;