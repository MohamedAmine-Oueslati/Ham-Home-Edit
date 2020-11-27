import React from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/homepage/login";
import SignUp from "./components/homepage/signup";
import Home from "./components/homepage/home";
import SelectAction from "./components/selectAction/selectAction";
import RentView from "./components/rentView/rentView";
import PostView from "./components/postView/postView";
import ProfileView from "./components/profileView/profileView";
import UpdatePost from "./components/updatePost/updatePost";

function App() {
  const hist = createBrowserHistory();

  return (
    <Router history={hist}>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SelectAction" component={SelectAction} />
        <Route path="/SeePosts" component={RentView} />
        <Route path="/AddPost" component={PostView} />
        <Route path="/ProfileView" component={ProfileView} />
        <Route path="/UpdatePost" component={UpdatePost} />
        <Redirect from="*" to="/" />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
