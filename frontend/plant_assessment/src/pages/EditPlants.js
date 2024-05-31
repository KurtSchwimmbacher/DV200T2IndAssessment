import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from "../components/NavigationBar";
import EditPlantForm from "../components/EditPlantForm";
import FooterComp from "../components/FooterComp";


// import "../styles/HomePage.css";



function EditPlant() {


   
    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col className="col-12 details-title-con">
                        <h1 className="home-title">
                            Edit A <b className="green-title-word">Plant</b> Entry
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EditPlantForm />
                    </Col>
                </Row>
            </Container>

            <FooterComp />
        </>
    );
}

export default EditPlant; 