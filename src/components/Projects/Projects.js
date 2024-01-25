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
import json from "/Users/bbyhea/Desktop/portfolio/Portfolio/src/Assets/Projects/json.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
Voici mes projets majeurs réalisés lors de mes deux ans de BTS SIO.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ORTHELP"
              description="Site d'entraide entre les étudiants des établissement ORTHELP avec Symfony PHP et une application en JAVA"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="demo1"             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={json} // Chemin de l'image du premier projet
                isBlog={false}
                title="Module Drupal Vers JSON" // Remplacez par le titre de votre projet
                description="Dans ce projet lors de mon stage j'ai codé de A a Z un module json qui récupére les informations de sites drupal pour un meilleur rendement" // Brève description du projet
                ghLink="https://github.com/lien_vers_votre_projet_1" // Lien GitHub du projet
                demoLink="morsay"/>
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={"json.png"} // Chemin de l'image du premier projet
                isBlog={false}
                title="Mise en place de Symfony Panther" // Remplacez par le titre de votre projet
                description="Dans ce projet lors de mon alternance, j'ai du installer Panther Smyfony a travers un conteneur et un docker file" // Brève description du projet
                ghLink="https://github.com/lien_vers_votre_projet_1" // Lien GitHub du projet
                demoLink="cyp" // Lien de démonstration du projet (si applicable)
            />
          </Col>






        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
