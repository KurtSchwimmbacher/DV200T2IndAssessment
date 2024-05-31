import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import{ Link }from 'react-router-dom'
import HomePlantCard from './HomePlantCard';

function IndoorOutdoor() {
    const [isIndoor, setIsIndoor] = useState(false);

    const swapToIndoor = () => {
        setIsIndoor(true);
    };

    const swapToOutdoor = () => {
        setIsIndoor(false);
    };

    return (
        <>
            <Container className="mb-3 mt-5">
                {/* heading rows */}
                <Row className='mt-5' >
                    <Col>
                        <h2 className='placements-title'>
                            Plants that suit your <b className='green-title-word'>placements</b>
                        </h2>
                    </Col>
                </Row>
                <Row className='mt-3 mb-5'>
                    <Col>
                        <h4 className='placements-subtitle'>
                            Pay attention to your living environment when choosing plants.
                        </h4>
                    </Col>
                </Row>
                {/* button/ pill row */}
                <Row className='mt-3'>
                    <Col className="col-2">
                        <Button
                            className={`cta-btn btn-secondary ${!isIndoor ? 'btn-active' : ''}`}
                            type="button"
                            onClick={swapToOutdoor}
                        >
                            Outdoor
                        </Button>
                    </Col>

                    <Col className="col-2">
                        <Button
                            className={`cta-btn btn-secondary ${isIndoor ? 'btn-active' : ''}`}
                            type="button"
                            onClick={swapToIndoor}
                        >
                            Indoor
                        </Button>
                    </Col>

                    <Col className="col-6"></Col>

                    <Col className="col-2">
                        <Button className="cta-btn btn-primary" type="button">
                            <Link to='/list' className="link-to-list">
                                See All
                            </Link>
                        </Button>
                    </Col>
                </Row>
                {/* content row */}
                <Row className='mt-3'>
                    <Col className="col-4">
                        <HomePlantCard category={"card1"} indoors={isIndoor} />
                    </Col>
                    <Col className="col-4">
                        <HomePlantCard category={"card2"} indoors={isIndoor} />
                    </Col>
                    <Col className="col-4">
                        <HomePlantCard category={"card3"} indoors={isIndoor} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default IndoorOutdoor;
