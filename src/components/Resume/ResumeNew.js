import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import dev from "../../Assets/Projects/dev.png";

function ResumeNew() {
    return (
        <Container fluid className="resume-section">
            <Particle />
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="resume">
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Mon <strong className="purple">Alternance</strong>
                        </h1>
                        <Card className="quote-card-view">
                            <Row>
                                <Col md={7}>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p style={{ textAlign: "justify" }}>
                                                Je travaille actuellement au <span className="purple">CCAS des Activités Sociales des Industries Électriques et Gazières</span>. Une entité gérée par et pour les salariés, offrant des activités sociales et culturelles depuis <span className="purple">1946</span>.
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                Situé à <span className="purple">Montreuil</span>, l'engagement du CCAS en matière de <span className="purple">RGPD</span>, de <span className="purple">ressources tangibles et intangibles</span>, ainsi que de <span className="purple">Responsabilité Sociale des Entreprises (RSE)</span> reflète leur dévouement pour l'inclusion sociale et le bien-être des familles.
                                            </p>
                                        </blockquote>
                                    </Card.Body>
                                </Col>
                                <Col md={5} className="d-flex align-items-center">
                                    <img
                                        src={dev}
                                        alt="home pic"
                                        className="img-fluid mx-auto d-block"
                                        style={{ maxHeight: "450px" }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>

    );
}

export default ResumeNew;
