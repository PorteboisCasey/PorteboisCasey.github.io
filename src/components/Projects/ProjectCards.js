import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { CgWebsite } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate de react-router-dom

function ProjectCards(props) {
    let navigate = useNavigate(); // Utilisez useNavigate pour la navigation programmatique

    // Fonction pour gérer le clic sur le bouton Démo
    const handleDemoClick = () => {
        // Navigue vers la page de GIF en utilisant le chemin /gif/nomDuGif
        // Assurez-vous que `props.demoLink` contient le nom du GIF (sans l'extension .gif)
        navigate(`/gif/${props.demoLink}`);
    };

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        onClick={handleDemoClick} // Modifiez pour utiliser handleDemoClick au lieu de naviguer directement
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;Demo
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProjectCards;