import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import EditPlantForm from "../components/EditPlantForm";


// import "../styles/HomePage.css";



function EditPlant() {


   
    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello World
                            Edit Plant
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EditPlantForm />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EditPlant; 