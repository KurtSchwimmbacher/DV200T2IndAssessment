import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";
import CreatePlantForm from "../components/CreatePlantForm";
import FooterComp from "../components/FooterComp";



// import "../styles/HomePage.css";



function CreatePlant() {


   
    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello World
                            Create Plant
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CreatePlantForm />
                    </Col>
                </Row>
            </Container>

            <FooterComp />
        </>
    );
}

export default CreatePlant; 