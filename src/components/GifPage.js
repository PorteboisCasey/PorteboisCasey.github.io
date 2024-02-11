// GifPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import demo1 from '../Assets/Projects/demo1.gif'; // Assurez-vous que le chemin est correct
import demo2 from '../Assets/Projects/morsay.gif'
import demo3 from '../Assets/Projects/Cyp.gif'
import Button from 'react-bootstrap/Button'; // Assurez-vous d'avoir importé Button de React Bootstrap

const gifMapper = {
    "demo1": demo1,
    "morsay" : demo2,
    "cyp" : demo3,
};

const GifPage = () => {
    let { gifName } = useParams();
    let navigate = useNavigate(); // Utilisez useNavigate pour la navigation
    const gifToShow = gifMapper[gifName];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {gifToShow ? <img src={gifToShow} alt="Demo GIF" style={{ maxWidth: '1600px', maxHeight: '750px', width: 'auto', height: 'auto' }} /> : <p>GIF non trouvé</p>}
            <Button variant="primary" onClick={() => navigate('/project')} style={{ marginTop: '20px' }}>Retour aux projets</Button>
        </div>
    );
}

export default GifPage;
