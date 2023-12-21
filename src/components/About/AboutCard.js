import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
             Je suis <span className="purple">Portebois Casey </span>
            de <span className="purple"> Paris, France.</span>
            <br />
            Je suis actuellement en BTS SIO option SLAM
            <br />

            <br />
            <br />
            Appart l'informatique j'aime énormement :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jiu Jutsu Brésilien
            </li>
            <li className="about-activity">
              <ImPointRight /> Le cinéma
            </li>
            <li className="about-activity">
              <ImPointRight /> Enregistrer des prods.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
