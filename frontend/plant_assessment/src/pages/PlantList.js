import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";



// import "../styles/HomePage.css";



function PlantList() {


   
    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello World
                            Plant List
                        </h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PlantList; 