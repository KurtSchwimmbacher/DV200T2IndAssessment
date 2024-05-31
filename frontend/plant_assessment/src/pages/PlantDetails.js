import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import axios from "axios";
import FooterComp from "../components/FooterComp";


import "../styles/DetailsPage.css";
import PlantReqIcon from "../components/PlantReqIcon";



function PlantDetails() {

    const { id } = useParams(); // Get the id from the URL params
    const [plantID, setPlantID] = useState(id);
    const [plantObj, setPlantObj] = useState({});
    const[plantReq, setPlantReq] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get(`http://localhost:7000/api/plants/${plantID}`);
                console.log(response.data)
                setPlantObj(response.data);
                setPlantReq(response.data.requirements.split(","));
            } catch (error) {
                console.log("Error fetching plant list", error);
            }
        };
    
        fetchPlants(); 
    }, []);
    
   


    return(
        <>
        <NavigationBar />
        <div className="hero-img-con">
            {plantObj && <img src={`http://localhost:7000/plant-images/${plantObj.image}`} alt="" className="details-img-header"/>}
        </div>
            <Container className="details-con">
                <Row>
                    <Col className="details-title">
                        <h1 className="details-plant-title">Individual Details on the:</h1>
                        
                        <h1 className="details-plant-name">{plantObj.name}</h1>
                    </Col>
                </Row>
                <Row className="details-info-row">
                    <Col>
                        <h1 className="details-title title-name">{plantObj.name}</h1>
                        <h3 className="details-title title-species">{plantObj.species}</h3>
                        <h6>{plantObj.description}</h6>
                        <h3 className="mt-3 details-title title-price">R{plantObj.price}.00</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="mt-2 details-title plant-req">Plant Requirements:    </h1>
                    </Col>
                </Row>
                <Row>
                {plantReq.map(requirement => (
                    <Col key={requirement} className="requirement-col">
                        <p>{requirement}</p>
                        <PlantReqIcon condition={requirement} />
                    </Col>
                ))}
                </Row>
            </Container>

            <FooterComp />
        </>
    );
}

export default PlantDetails; 