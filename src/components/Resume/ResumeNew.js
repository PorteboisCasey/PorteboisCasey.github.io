import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import diagramme from "../../Assets/Projects/diagramme.png"; // Assurez-vous que le chemin vers l'image est correct

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
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p style={{ textAlign: "justify" }}>
                                        Je travaille actuellement au <span className="purple">CCAS des Activités Sociales des Industries Électriques et Gazières</span>, située à Montreuil, France. Cette entité, créée en <span className="purple">1946</span>, gère les activités sociales pour le personnel des industries électrique et gazière, bénéficiant à plus de 500 000 personnes. <br />
                                    </p>
                                    {/* Vous pouvez continuer à ajouter du texte ou ajuster le contenu ici. */}
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <img
                            src={diagramme}
                            alt="diagramme"
                            className="img-fluid"
                            style={{ maxHeight: "1000px", maxWidth: "100%" }} // Augmentation de la hauteur maximale
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ResumeNew;
