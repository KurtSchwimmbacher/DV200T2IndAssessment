import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import axios from "axios";


// import "../styles/HomePage.css";



function PlantDetails() {

    const { id } = useParams(); // Get the id from the URL params
    const [plantID, setPlantID] = useState(id);
    const [plantObj, setPlantObj] = useState({});

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/plants/${plantID}`);
                console.log(response.data)
                setPlantObj(response.data)
            } catch (error) {
                console.log("Error fetching plant list", error);
            }
        };

        fetchPlants();
    }, []);
   


    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello World
                            Plant Details
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {plantObj && <img src={`http://localhost:5000/plant-images/${plantObj.image}`} style={{width:500}}/>}
                        <h2>{plantObj.name}</h2>
                        <h5>{plantObj.species}</h5>
                        <p>{plantObj.description}</p>
                        <p>{plantObj.requirements}</p>
                        <p>R{plantObj.price}.00</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PlantDetails; 