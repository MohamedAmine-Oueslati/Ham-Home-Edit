import React from "react";
import ReactDOM from "react-dom";
import SearchedHome from "../searchedHome/searchedHome";
import UpdatePost from "../updatePost/updatePost";
import HamNav from "../homepage/nav";
// import $ from "jquery";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  seePosts() {
    axios.get("/posts").then((res) => {
      const posts = res.data;
      this.setState({ posts });
      console.log(this.state.posts);
    });
  }

  postDetails(i) {
    ReactDOM.render(
      <SearchedHome post={this.state.posts[i]} />,
      document.getElementById("app")
    );
  }
  componentDidMount() {
    axios.get("/posts").then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  updatePost() {
    ReactDOM.render(
      <UpdatePost post={this.state.posts} />,
      document.getElementById("app")
    );
  }

  render() {
    const displayPosts = this.state.posts.map((item, i) => {
      return (
        <div className="cardBox" id="rentContainer">
          <MDBRow className="cardBox1">
            <MDBCol md="4" id="cardBox2">
              <MDBCard>
                <MDBCardImage
                  top
                  src={item.imagesrc}
                  overlay="white-slight"
                  hover
                  waves
                  alt="MDBCard image cap"
                  id="cardBoxImage"
                />
                <MDBCardBody className="elegant-color white-text rounded-bottom">
                  <a
                    href="#!"
                    className="activator waves-effect waves-light mr-4"
                  >
                    <MDBIcon icon="share-alt" className="white-text" />
                  </a>
                  <MDBCardTitle>Price : ${item.price}</MDBCardTitle>
                  <hr className="hr-light" />
                  <MDBCardText className="white-text">
                    Rooms : {item.rooms}
                  </MDBCardText>
                  <MDBCardText className="white-text">
                    Address : {item.address}
                  </MDBCardText>
                  <a
                    href="#!"
                    className="black-text d-flex justify-content-end"
                  >
                    <h5
                      className="white-text"
                      onClick={this.postDetails.bind(this, i)}
                      key={i}
                    >
                      Read more
                      <MDBIcon icon="angle-double-right" className="ml-2" />
                    </h5>
                  </a>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      );
    });
    return (
      <div>
        <HamNav loggedIn={true} />
        <section className="section1 about-section gray-bg1" id="about">
          <div className="container">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-text go-to">
                  <h3 className="dark-color">Mohamed Amine Oueslati</h3>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>Birthday</label>
                        <p>26th september 1991</p>
                      </div>
                      <div className="media">
                        <label>Age</label>
                        <p>{2020 - 1991} years old</p>
                      </div>
                      <div className="media">
                        <label>Residence</label>
                        <p>Tunisia</p>
                      </div>
                      <div className="media">
                        <label>Address</label>
                        <p>Ben Arous, Tunisia</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>info@domain.com</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-avatar">
                  <img
                    src="https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"
                    width="400px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="counter">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <Link to={"/AddPost"}>
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="500" data-speed="500">
                        <img
                          src="https://cdn.onlinewebfonts.com/svg/img_259698.png"
                          width="30px"
                        />
                      </h6>
                      <p className="m-0px font-w-600">Post</p>
                    </div>
                  </Link>
                </div>
                <div className="col-6 col-lg-3">
                  <div
                    className="count-data text-center"
                    onClick={this.seePosts.bind(this)}
                  >
                    <h6 className="count h2" data-to="150" data-speed="150">
                      {this.state.posts.length}
                    </h6>
                    <p className="m-0px font-w-600">Num. of Posts</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <div className="count-data text-center">
                    <h6 className="count h2" data-to="850" data-speed="850">
                      0
                    </h6>
                    <p className="m-0px font-w-600">House Rent</p>
                  </div>
                </div>
                <div className="col-6 col-lg-3">
                  <Link to={"/UpdatePost"}>
                    <div
                      className="count-data text-center"
                      onClick={this.updatePost.bind(this)}
                    >
                      <h6 className="count h2" data-to="190" data-speed="190">
                        <img
                          src="https://icons-for-free.com/iconfiles/png/512/refresh+reload+update+icon-1320191166843452904.png"
                          width="30px"
                        />
                      </h6>
                      <p className="m-0px font-w-600">Update</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {displayPosts}
      </div>
    );
  }
}

export default ProfileView;
