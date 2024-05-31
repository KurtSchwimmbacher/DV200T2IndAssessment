import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";
import PlantCard from "../components/PlantCard";
import axios from "axios";
import { useState, useEffect } from "react";

import '../styles/PlantList.css';

function PlantList() {
    const [plantsArr, setPlantsArr] = useState([]);

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/plants/');
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
                        <h1 className="mt-5 mb-3 plantlist-title">Our Full Listing of <b className="green-title-word">Plants</b> Available</h1>
                    </Col>
                </Row>
                {/* filters */}
                <Row>
                    <Col>
                        Filters
                    </Col>
                </Row>
                <Row>
                    {plantsArr.map((plant, index) => (
                        <Col className="col-4" key={index}>
                            
                            <PlantCard 
                            plantID={plant._id}
                            image={`http://localhost:7000/plant-images/${plant.image}`} 
                            name={plant.name} 
                            details={plant.description} 
                            price={plant.price} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default PlantList;
