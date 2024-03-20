import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import json from "../../Assets/Projects/json.jpeg"
import panther from "../../Assets/Projects/panther.png";
import composer from "../../Assets/Projects/composer.png"




function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets / Missions <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
Voici mes projets / missions majeurs réalisés lors de mes deux ans de BTS SIO au CFA et en entreprise.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={3} className="project-card">
  <ProjectCard
    imgPath={chatify}
    isBlog={false}
    title="HELPORT"
    description="Site d'entraide entre les étudiants des établissements ORT avec Symfony PHP et une application en JAVA"
    ghLink="https://github.com/soumyajit4419/Chatify"
    demoLink="demo1"/>
</Col>

<Col md={3} className="project-card">
  <ProjectCard
    imgPath={json}
    isBlog={false}
    title="Module Drupal Vers JSON"
    description="Dans cette mission lors de mon stage j'ai codé de A à Z un module json qui récupére les informations de sites drupal pour un meilleur rendement d'extraction de données."
    demoLink="demo3"/>
</Col>

<Col md={3} className="project-card">
  <ProjectCard
    imgPath={panther}
    isBlog={false}
    title="Mise en place de Symfony Panther"
    description="Dans cette mission lors de mon alternance, j'ai dû installer Panther Symfony à travers un conteneur et un Dockerfile puis entamer des tests selon un cahier d'exigences."
    demoLink="demo2"
  />
</Col>

<Col md={3} className="project-card">
  <ProjectCard
    imgPath={composer}
    isBlog={false}
    title="Bundle Composer"
    description="Dans cette mission j'ai du créer un bundle pour connecter les entrées d'une api ainsi que les sorties selon certains critères pour exploiter les données."
    demoLink="demo4"
  />
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;