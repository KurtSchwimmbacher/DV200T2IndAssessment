import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavigationBar from "../components/NavigationBar";
import CreatePlantForm from "../components/CreatePlantForm";
import FooterComp from "../components/FooterComp";

import bamboo from '../assets/bamboo-close-up.jpg';


import "../styles/CreatePlant.css";



function CreatePlant() {


   
    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col className="col-12 details-title-con">
                        <h1 className="home-title">
                            Add a <b className="green-title-word">Plant</b> Entry
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-6">
                        <CreatePlantForm />
                    </Col>
                    <Col className="col-6"></Col>
                </Row>
            </Container>

            <div className="bamboo-img-con">
                <img src={bamboo} alt="bamboo" className="bamboo-img"></img>
            </div>

            <FooterComp />
        </>
    );
}

export default CreatePlant; 