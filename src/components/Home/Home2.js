import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              This is <span className="purple"> Lorent Ipsum </span> Website
            </h1>
            <p className="home-about-body">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
             sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
             like Aldus PageMaker including versions of Lorem Ipsum.
              <br />
              <br />Contrary to popular belief,
              <i>
                <b className="purple"> Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </b>
              </i>
              <br />
              <br />
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia &nbsp;
              <i>
                <b className="purple">looked up one of the more obscure Latin words, consectetur </b> and
                from a Lorem Ipsum passage, and going through the cites of the word in classical literature{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> by Cicero are also reproduced in their exact original form</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel Free To <span className="purple">Connect </span>With Us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
