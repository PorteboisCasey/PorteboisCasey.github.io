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
              LAISSEZ MOI  <span className="purple"> M'INTRODUIRE </span>
            </h1>
            <p className="home-about-body">
              Je suis tombé amoureux de la programmation et j'ai au moins appris quelque chose, je pense. 🤷‍️
              <br />
              <br />Je suis actuellement en BTS SIO
              <i>
                <b className="purple"> PHP SYMFONY, JAVA, SQL, CYBERSECURITY AND C  </b>
              </i>
              <br />
              <br />
              Mes centres d'intérets au niveau informatique sont :  &nbsp;
              <i>
                <b className="purple">Mes centres d'intérêt sont la création de nouvelles technologies et de nouveaux produits Web  </b>
                ainsi que les domaines liés à la{" "}
                <b className="purple">
                   blockchain.
                </b>
              </i>
              <br />
              <br />
              <i>
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
            <h1>Trouver moi sur : </h1>
            <p>
               <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PorteboisCasey"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/portebois-casey/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
