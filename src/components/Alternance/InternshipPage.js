// src/components/Alternance/InternshipPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import InternshipIntro from "./InternshipIntro"; // Vous créerez ce composant pour l'introduction de l'alternance

function InternshipPage() {
    return (
        <section>
            <Container fluid className="internship-section" id="internship">
                <Particle />
                <Container className="internship-content">
                    <Row>
                        <Col>
                            <h1 className="heading">
                                Bienvenue sur ma page <strong className="purple">Alternance</strong>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <InternshipIntro />
            {/* Vous pouvez ajouter plus de composants ici si vous avez d'autres sections à afficher */}
        </section>
    );
}

export default InternshipPage;
