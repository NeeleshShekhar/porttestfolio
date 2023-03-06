import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hrc from "../../Assets/hrc.png";
import prayag from "../../Assets/prayag.png";
import jhar from "../../Assets/jhar.png";
import ey from "../../Assets/ey.png";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
function Experience() {
  return (
    <Container>
    <Row className="ed-card">
    <Col md={2} >
        <Tilt>
          <img src={ey} className="img-fluid" style={{padding:"10%"}} alt="avatar" />
        </Tilt>
      </Col>
      <Col md={8} >
        <h3 style={{ textAlign: "left"}}>Associate Software Engineer</h3>
        <h5 className="purple" style={{ textAlign: "left"}}>Ernst and Young</h5>
        <p style={{ fontSize: "0.89em", textAlign: "left",paddingBottom: "20px" ,color:"black"}}>A Cloud Engineer with DotNet and GCP Experience.
      </p></Col>
      
    </Row>
    <br/>
    <Row className="ed-card">
    <Col md={2} >
        <Tilt>
          <img src={hrc} className="img-fluid" style={{padding:"10%"}} alt="avatar" />
        </Tilt>
      </Col>
      <Col md={8} >
        <h3 style={{ textAlign: "left"}}>Digital Transformation Consultant</h3>
        <h5 className="purple" style={{ textAlign: "left"}}>Highradius</h5>
        <p style={{ fontSize: "0.89em", textAlign: "left",paddingBottom: "20px" ,color:"black"}}>Carried out exploratory data analysis on the data for several clients to solve business problems like Daily Sales Outstanding using multiple data analysis tools like SQL, Advanced Excel, and Tableau.
      </p></Col>
      
    </Row>
    <br/>
    <Row className="ed-card">
    <Col md={2} >
        <Tilt>
          <img src={jhar} className="img-fluid" style={{padding:"10%"}} alt="avatar" />
        </Tilt>
      </Col>
      <Col md={8} >
        <h3 style={{ textAlign: "left"}}>SDE, Intern</h3>
        <h5 className="purple" style={{ textAlign: "left"}}>Jharkhand Government</h5>
        <p style={{ fontSize: "0.89em", textAlign: "left",paddingBottom: "20px" ,color:"black"}}>Created a DotNet Web App to cater to the Village Level Entreprenuers.
      </p></Col>
      
    </Row>
    <br/>
    
    
  </Container>

  );
}

export default Experience;
