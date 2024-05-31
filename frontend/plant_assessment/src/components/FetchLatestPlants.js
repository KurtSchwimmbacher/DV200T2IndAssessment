import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlantCard from "../components/PlantCard"; // Ensure the path is correct

function LatestProducts() {
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        const fetchLatestProducts = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/plants/latest');
                setLatestProducts(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error fetching latest products", error);
            }
        };

        fetchLatestProducts();
    }, []);

    return (
        <Container>
            <Row>
                {latestProducts.map((product, index) => (
                    <Col className="col-4" key={index}>
                        <PlantCard 
                            plantID={product._id}
                            image={`http://localhost:7000/plant-images/${product.image}`} 
                            name={product.name} 
                            details={product.description} 
                            price={product.price} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default LatestProducts;
