import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { useState, useEffect } from "react";

function PlantList() {
    const [plantsArr, setPlantsArr] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/plants/');
                setPlantsArr(response.data);
                console.log(response.data)
            } catch (error) {
                console.log("Error fetching plant list", error);
            }
        };

        fetchPlants();
    }, []);
   
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>Plant List</h1>
                    </Col>
                </Row>
                <Row>
                    {plantsArr.map((plant, index) => (
                        <Col key={index}>
                            <div>
                                <h2>{plant.name}</h2>
                                <img 
                                    src={`http://localhost:5000/plant-images/${plant.image}`} 
                                    alt={plant.name} 
                                    // style={{ width: '100px', height: '100px' }} // Adjust size as needed
                                />
                                <p>{plant.species}</p>
                                <p>{plant.description}</p>
                                <p>{plant.requirements}</p>
                                <p>${plant.price}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default PlantList;
