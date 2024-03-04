import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar3.png";
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
                Qui <span className="purple"> suis je ?</span>
              </h1>
              <p className="home-about-body">
                Je suis tombé amoureux de  la programmation et de l'IT en général.
                <br />
                <br />Je suis actuellement en BTS SIO avec comme grands axes de travail : &nbsp;
                <i>
                  <b className="purple"> PHP SYMFONY, JAVA, SQL et de la cybersécurité.  </b>
                </i>
                <br />
                <br />
                Mes centres d'intérets au niveau informatique sont :  &nbsp;
                <i>
                  <b className="purple">La création de nouvelles technologies et de nouveaux produits Web  </b>
                  ainsi que les domaines liés à la{" "}
                  <b className="purple">
                    blockchain et du typescript depuis quelque temps. J'essaye de me mettre a jours sur toutes les techs intéressantes
                    pour devenir DEVOPS  🙇🏻‍
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
                <img src={myImg} className="img-fluid" alt="avatar"/>
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
