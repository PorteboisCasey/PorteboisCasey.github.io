import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
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
                                Bonjour!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                            </h1>

                            <h1 className="heading-name">
                                <strong className="main-name"> PORTEBOIS CASEY</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                                {/* Boutons CV et Tableau de compétences ajoutés ici */}
                                <div style={{ marginTop: 20 }}>
                                    <Button variant="primary" href="lienVersVotreCV.pdf" target="_blank" style={{ marginRight: 10 }}>
                                        CV
                                    </Button>
                                    <Button variant="secondary" href="lienVersVotreTableauDeCompetences.pdf" target="_blank">
                                        Tableau de compétences
                                    </Button>
                                </div>
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img src={homeLogo} alt="home pic" className="img-fluid" style={{ maxHeight: "450px" }} />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
        </section>
    );
}

export default Home;
