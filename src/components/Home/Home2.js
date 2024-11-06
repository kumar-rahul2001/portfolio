import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myPhoto from "../../Assets/myPhoto.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import Home3 from "./Home3";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={myImg} className="img-fluid" alt="avatar" /> */}
              <img
                width="250px"
                height="250px"
                src={myPhoto}
                className="img-fluid"
                alt="avatar"
                style={{ border: "5px solid #623686", borderRadius: "5px" }}
              />
            </Tilt>
          </Col>
          {/* <Col
            md={4}
            className="myAvtar"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              backgroundColor: "green",
              overflow: "hidden",
            }}
          >
            <Tilt>
              <img
                width="250px"
                height="250px"
                src={myPhoto}
                alt="avatar"
                style={{
                  position: "relative",
                  // top: "15px", // Adjust upward position
                  borderRadius: "50%",
                  objectFit: "cover",
                  mixBlendMode: "multiply",
                }}
              />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Home3 />
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:rahulkumar20010702@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/kumar-rahul2001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/itstherealrahul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                  {/* <BsTwitterX /> */}
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kumar-rahul2001/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itstherealrahul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/itstherealrahul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookSquare />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
