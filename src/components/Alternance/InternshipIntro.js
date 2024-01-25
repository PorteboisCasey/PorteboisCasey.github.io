// src/components/Alternance/InternshipIntro.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function InternshipIntro() {
    return (
        <Container fluid className="internship-intro-section">
            <Container>
                <Row className="align-items-center">
                    {/* Colonne pour le texte d'introduction */}
                    <Col md={8} className="internship-intro-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            Mon <span className="purple">Parcours d'Alternance</span>
                        </h1>
                        <p className="internship-intro-body">
                            Détaillez ici votre expérience en alternance, les compétences acquises,
                            les projets réalisés, etc.
                        </p>
                    </Col>
                    {/* Colonne pour une image ou un visuel */}
                    <Col md={4}>
                        {/* Vous pouvez ajouter une image ou un autre élément visuel ici */}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default InternshipIntro;
