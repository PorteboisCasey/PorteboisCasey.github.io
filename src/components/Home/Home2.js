import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar3.png";
import Tilt from "react-parallax-tilt";
import cv from '../../Assets/Projects/cv.pdf';
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
              Qui <span className="purple"> suis je ?</span>
            </h1>
            <p className="home-about-body">
              Je me suis dirigé naturellement dans la programmation et l'IT en général car depuis mon plus jeune âge je suis passionné des jeux vidéos et l'informatique.
              <br />
              <br />Je suis actuellement en BTS SIO avec comme grands axes de travail : &nbsp;
              <i>
                <b className="purple"> PHP SYMFONY, JAVA, SQL et de la cybersécurité.  </b>
              </i>
              <br />
              <br />
              Mes centres d'intérêts au niveau informatique sont :  &nbsp;
              <i>
                <b className="purple">Les domaines </b>
                  liés à la{" "}
                <b className="purple">
                  blockchain et du système. Depuis quelque temps je me met à jour sur toutes les technologies intéressantes
                  pour devenir DEVOPS ou administrateur systèmes.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouvez-moi sur :</h1>
            <p>
              <span className="purple">Connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                    href="https://github.com/PorteboisCasey"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                    href="https://www.linkedin.com/in/portebois-casey/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            {/* Boutons ajoutés ici */}
            <div className="mt-3">
              <Button href="/competence.pdf" target="_blank" className="m-2">
                Voir mon tableau de compétences
              </Button>
              <Button href={cv} target="_blank" className="m-2">
  Voir mon CV
</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
