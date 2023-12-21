import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPhp, SiSymfony, SiMysql, SiC } from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Importez l'icône Java de Font Awesome

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {/* Icône PHP */}
            <Col xs={4} md={2} className="tech-icons">
                <SiPhp />
            </Col>
            {/* Icône Symfony */}
            <Col xs={4} md={2} className="tech-icons">
                <SiSymfony />
            </Col>
            {/* Icône Java */}
            <Col xs={4} md={2} className="tech-icons">
                <FaJava />
            </Col>
            {/* Icône SQL (en utilisant MySQL comme exemple) */}
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            {/* Icône C (et non C++) */}
            <Col xs={4} md={2} className="tech-icons">
                <SiC />
            </Col>
        </Row>
    );
}

export default Techstack;
