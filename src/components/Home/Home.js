import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/neelesh.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Neelesh Shekhar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ paddingLeft: 50, textAlign: "left" }}>
              An Individual with a Computer Science background with an excellent analytical perspective towards solving problems. I have experience in the Digital transformation of organizations by analyzing real data sets.
           
              </div>
               </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "600px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Home3 />
    </section>
  );
}

export default Home;
