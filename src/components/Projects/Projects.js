import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import coursera from "../../Assets/coursera.png";
import kiit from "../../Assets/kiit.png";
import udemy from "../../Assets/udemy.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certifications I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursera}
              isBlog={false}
              title="Data Analysis With R"
              ghLink="https://www.coursera.org/account/accomplishments/certificate/KJQ7Y72A7VHY"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursera}
              isBlog={false}
              title="Ask Questions to Make Data-Driven Decisions"
              ghLink="https://www.coursera.org/account/accomplishments/certificate/WFGJZYSZEK4B"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coursera}
              isBlog={false}
              title="Foundations: Data, Data, Everywhere"
              ghLink="https://www.coursera.org/account/accomplishments/certificate/RQ2LXBNCXHKR"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udemy}
              isBlog={false}
              title="SQL for Data Analytics 2021"
             ghLink="https://ude.my/UC-30179d89-17f2-4fcf-8a2f-e%2030004a1e888"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={udemy}
              isBlog={false}
              title="Tableau for Beginners: Get DA Certified"
             ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kiit}
              isBlog={false}
              title="Sales and management "
              ghLink="https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
