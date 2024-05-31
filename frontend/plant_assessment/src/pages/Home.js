import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavigationBar from "../components/NavigationBar";

import IndoorOutdoor from "../components/IndoorOutdoor";

import "../styles/Home.css";
import FooterComp from "../components/FooterComp";
import FetchLatestPlants from "../components/FetchLatestPlants";



function Home() {

   
    return(
        <>
        {/* navigation */}
        <NavigationBar />
            {/* hero section */}
            <Container>
                <Row>
                    <Col className="col-12 details-title-con">
                        <h1 className="home-title">
                            FIND BEAUTIFUL PLANTS ONLY AT 
                        </h1>
                        <h1 className="home-brand">Plantopia</h1>
                    </Col>
                    <Col className="col-4 home-cta-con">
                       <h4 className=" home-cta">
                        We sell plants to liven up your home and garden!
                       </h4>
                        <div className="button-con">
                            <Button className="cta-btn btn-primary" type="button">
                                Get Started
                            </Button>
                            <Button className="cta-btn btn-secondary" variant="secondary" type="button">
                                Explore Now
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* plant image section */}
            <div className="hero-img-holder">
                
            </div>

            {/* types of plants section */}
            <IndoorOutdoor />

            {/* explore our latest arrivals section */}
            <Container className="mt-5">
                {/* headings row */}
                <Row className="mt-5">
                    <Col className="col-8">
                        <h2 className="new-listings-title">
                            Explore our latest plant arrivals under <b className="green-title-word">"Plant List"</b>
                        </h2>
                    </Col>
                    <Col className="col-4">
                       <h4 className="new-listings-subtitle">
                        We introduce our customers to the excitement of discovering new plants!
                        <br></br>
                        <br></br>
                        Get to know the new arrivals in our store!
                       </h4>
                    </Col>
                </Row>
            </Container>
            <FetchLatestPlants />


            {/* join section */}
            <Container className="mt-5 mb-5">
                <Row>
                    <Col>
                        <h2 className="placements-title mt-5">
                            Join us as a <b className="green-title-word">Member</b> to receive discounts and news!
                        </h2>
                    </Col>
                </Row>
                <Row className='mt-3 mb-5'>
                    <Col>
                        <h4 className='placements-subtitle'>
                            In this community, user's can reach out to one another, 
                            <br></br>
                            exchanging information and providing support to each other.
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-2"></Col>
                    <Col> 
                       <div className="button-con">
                            <Button className="cta-btn btn-primary"> Sign Up</Button>
                            <Button className="cta-btn btn-secondary"> Log In</Button>
                       </div>
                    </Col>
                    <Col className="col-2"></Col>
                </Row>
            </Container>

            {/* footer */}
            <FooterComp />
        </>
    );
}

export default Home; 