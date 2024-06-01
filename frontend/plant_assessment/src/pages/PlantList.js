import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import NavigationBar from "../components/NavigationBar";
import PlantCard from "../components/PlantCard";
import FooterComp from "../components/FooterComp";

import "../styles/PlantList.css";

function PlantList() {
    const [plantsArr, setPlantsArr] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        const fetchPlants = async () => {
            try {
                const response = await axios.get('http://localhost:7000/api/plants/');
                setPlantsArr(response.data);
            } catch (error) {
                console.log("Error fetching plant list", error);
            }
        };

        fetchPlants();
    }, []);

    // Filter plants based on search query and filter
    const filteredPlants = plantsArr.filter(plant => 
        plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate paginated plants
    const indexOfLastPlant = currentPage * itemsPerPage;
    const indexOfFirstPlant = indexOfLastPlant - itemsPerPage;
    const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total pages
    const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);

    return (
        <>
            <NavigationBar />
            <Container className="mb-5">
                <Row>
                    <Col>
                        <h1 className="mt-5 mb-3 plantlist-title">
                            Our Full Listing of <b className="green-title-word">Plants</b> Available
                        </h1>
                    </Col>
                </Row>
                {/* Filters */}
                <Row>
                    <Col>
                        <input
                            type="text"
                            placeholder="Search plants"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="form-control mb-3"
                        />
                    </Col>
                </Row>
                <Row className="mb-5">
                    {currentPlants.map((plant, index) => (
                        <Col className="col-4" key={index}>
                            <PlantCard 
                                plantID={plant._id}
                                image={`http://localhost:7000/plant-images/${plant.image}`} 
                                name={plant.name} 
                                details={plant.description} 
                                price={plant.price} 
                            />
                        </Col>
                    ))}
                </Row>
                {/* Pagination */}
                <Row>
                    <Col>
                        <Pagination className="justify-content-center pagination">
                            {[...Array(totalPages).keys()].map(number => (
                                <Pagination.Item 
                                    key={number + 1} 
                                    active={number + 1 === currentPage} 
                                    onClick={() => paginate(number + 1)}
                                    className="pagination-item"
                                >
                                    {number + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </Col>
                </Row>
            </Container>
            <FooterComp />
        </>
    );
}

export default PlantList;
