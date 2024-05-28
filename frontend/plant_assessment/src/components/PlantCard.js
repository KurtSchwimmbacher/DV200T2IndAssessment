import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


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
        <Link to={`/plant/${props.plantID}`}>
          <Button variant="primary">View Plant Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;