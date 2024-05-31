import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function PlantCard(props) {
  


  return (
    <Card className='plant-card'>
      <Card.Img variant="top" src={props.image} className='plant-card-image' />
      <Card.ImgOverlay className='plant-card-overlay'>
        <Card.Body>
          <Card.Title className='plant-card-title'>{props.name}</Card.Title>
          <Card.Text className='plant-card-details'>
            {props.details}
          </Card.Text>
          <div className='card-bottom-con'>
            <Card.Text className='plant-card-price'>
              R{props.price}.00
            </Card.Text>
            <Link to={`/plant/${props.plantID}`} className='plant-card-link'>
              <Button className='view-plant-btn btn-secondary'>View Plant Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default PlantCard;