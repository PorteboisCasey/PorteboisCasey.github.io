import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              <br />
              Je suis actuellement en BTS SIO option SLAM pour faire un diplome en <strong className="purple">cybersécurité ou devops dans le futur.  </strong> <strong className="purple"></strong>.
              <br />
              <br />
              <br />
              En dehors de l'informatique mes centres d'intérêts sont:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight />  Jiu Jutsu Brésilien 🥋
                  
              </li>
              <li className="about-activity">
                <ImPointRight /> Le cinéma 🎬
              </li>
              <li className="about-activity">
                <ImPointRight /> Enregistrer des prods (Fl studio). 🎹
              </li>
            </ul>
            <p style={{ textAlign: "justify" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Mon <strong className="purple">Entreprise </strong>
              </h1>
              En ce qui concerne mon alternance, je travaille actuellement a la CCAS de Montreuil dans le département de la  DSI. C'est une expérience <strong className="purple">Professionelle </strong> passionnante où je peux mettre en pratique mes compétences en informatique
              en utilisant comme <strong className="purple">technologie </strong> PHP Symfony, Docker ainsi que du SQL.
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
