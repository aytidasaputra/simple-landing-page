import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/1.svg";
import laptopImg2 from "../../Assets/2.svg";
import laptopImg3 from "../../Assets/3.svg";

import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <img src={laptopImg} alt="about" className="img-fluid" />
      </Col>
      <Aboutcard />
      <Col xs={4} md={2} className="tech-icons">
      <img src={laptopImg2} alt="about" className="img-fluid" />
      </Col>
      <Techstack />
      <Col xs={4} md={2} className="tech-icons">
      <img src={laptopImg3} alt="about" className="img-fluid" />
      </Col>
      
    </Row>
  );
}


export default Toolstack;
