import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMacos, SiJetbrains, SiDocker, SiGithub } from "react-icons/si"; // Assurez-vous d'importer les bonnes icônes

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* Icône macOS */}
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            {/* Icône JetBrains */}
            <Col xs={4} md={2} className="tech-icons">
                <SiJetbrains />
            </Col>
            {/* Icône Docker */}
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
        </Row>
    );
}

export default Toolstack;
