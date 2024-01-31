import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import dev from "../../Assets/Projects/dev.png"; // Assurez-vous que le chemin vers l'image est correct
import '/Users/bbyhea/Desktop/portfolio/Portfolio/src/style.css'; // Assurez-vous que le chemin d'accès est correct

function ResumeNew() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => setShowMore(!showMore);

    return (
        <Container fluid className="resume-section">
            <Particle />
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} className="resume">
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Mon <strong className="purple">Alternance</strong>
                        </h1>
                        <Card className="quote-card-view">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p style={{ textAlign: "justify" }}>
                                        Je travaille actuellement au <span className="purple">CCAS des Activités Sociales des Industries Électriques et Gazières</span>, située à Montreuil, France. Cette entité, créée en <span className="purple">1946</span>, gère les activités sociales pour le personnel des industries électrique et gazière, bénéficiant à plus de 670 000 personnes, soit environ 1% de la population française.
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        En tant qu'entité gérée par et pour les salariés, sa gouvernance est composée de représentants désignés par arrêté ministériel sur proposition des syndicats. Le CCAS est engagé envers la solidarité, la justice sociale, et le bien-être des salariés et de leurs familles, offrant des activités sociales incluant vacances, restauration, activités culturelles, santé et assurances.
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        Soumise aux réglementations européennes sur la protection des données personnelles (RGPD), le CCAS possède une histoire riche marquée par des valeurs de solidarité, dignité, et justice sociale, et est propriétaire de centres de vacances, en plus de partenariats avec diverses associations.
                                    </p>
                                </blockquote>
                            </Card.Body>
                            {showMore && (
                                <Row>
                                    <Col md={12} className="d-flex justify-content-center">
                                        <p>Informations supplémentaires sur mon alternance...</p>
                                        {/* Ajoutez ici des détails supplémentaires que vous souhaitez montrer */}
                                    </Col>
                                </Row>
                            )}
                            <Row>
                                <Col md={12} className="d-flex justify-content-center">
                                    <Button onClick={toggleShowMore} className="mt-3">
                                        {showMore ? 'Moins d\'infos' : 'Plus d\'infos'}
                                    </Button>
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
