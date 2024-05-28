import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PlantCard(props) {
  
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.details}
        </Card.Text>
        <Card.Text>
          {props.price}
        </Card.Text>
        <Button variant="primary" onClick={handleViewDetails}>View Plant Details</Button>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;