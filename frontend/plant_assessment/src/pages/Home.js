import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavigationBar from "../components/NavigationBar";




// import "../styles/HomePage.css";



function Home() {


   
    return(
        <>
        <NavigationBar />
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello World
                            Home!
                        </h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home; 