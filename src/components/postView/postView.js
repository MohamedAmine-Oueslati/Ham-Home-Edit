import React from "react";
import ReactDOM from "react-dom";
import ProfileView from "../profileView/profileView";
import HamNav from "../homepage/nav";
import { BrowserRouter as Link } from "react-router-dom";
import {
  InputGroup,
  Form,
  Button,
  Col,
  Nav,
  Navbar,
} from "react-bootstrap";
import $ from "jquery";
import axios from "axios";

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    }; 
  }

  handleClick() {
    const username = $("#username").val();
    const price = $("#price").val();
    const rooms = $("#rooms").val();
    const imagesrc = "./uploads/" + $("#imagesrc").val().slice(12);
    const address = $("#address").val();
    const description = $("#description").val();
    const date = new Date().toString();
    const rating = 0;

    if (
      username !== "" &&
      price !== "" &&
      rooms !== "" &&
      imagesrc !== "" &&
      address !== "" &&
      description !== ""
    ) {
      axios.post("/posts", {
        username,
        imagesrc,
        price,
        rooms,
        address,
        rating: rating,
        description,
        date: date,
        availibility: true,
        messages: "",
      });
      ReactDOM.render(<ProfileView />, document.getElementById("app"));
    }
  }

  seeProfile() {
    window.location = '/profile'
  }

  logout() {
    window.location = '/'
  }

  render() {
    return (
      <div>
        <HamNav loggedIn={true} />
        <div id="first">
          <Form className="rent">
            <Form.Group as={Col}>
              <Form.Label>
                {" "}
                <h5>username :</h5>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                id="username"
                value="Mohamed Amine Oueslati"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                {" "}
                <h5>Image :</h5>{" "}
              </Form.Label>
              <Form.File
                className="position-relative"
                required
                name="image"
                id="imagesrc"
              // onChange={handleChange} isInvalid={!!errors.file} feedback={errors.file} feedbackTooltip
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>
                {" "}
                <h5>Price :</h5>{" "}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  aria-describedby="inputGroupPrepend"
                  name="price"
                  id="price"

                // value={values.username} onChange={handleChange} isInvalid={!!errors.username}
                />
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                {" "}
                <h5>Rooms :</h5>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="0 bedroom(s) - 0 bathroom(s)"
                id="rooms"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                <h5>Address :</h5>
              </Form.Label>
              <Form.Control placeholder="1234 Main St ,State" id="address" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>
                {" "}
                <h5>Description :</h5>{" "}
              </Form.Label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="describe your house"
                id="description"
              ></textarea>
            </Form.Group>
          </Form>
        </div>
        <div id="second">
          {" "}
          <center>
            {" "}
            <h1>Important Note</h1>
          </center>{" "}
          <ul>
            <li>
              <h4>Never communicate your card number</h4>
            </li>
            <li>
              <h4>Make sure the photos are real</h4>
            </li>
            <li>
              <h4>precise the exact address </h4>
            </li>
            <li>
              <h4>use the Google map</h4>
            </li>
          </ul>
          <br />
          <center>
            <Link to={"/profile"}>
              <Button
                as={Col}
                variant="primary"
                type="submit"
                id="submitPost"
                onClick={this.handleClick.bind(this)}
              >
                Submit
              </Button>
            </Link>
          </center>
        </div>
      </div>
    );
  }
}

export default PostView;
