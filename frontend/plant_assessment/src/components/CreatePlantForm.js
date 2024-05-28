import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

function CreatePlantForm() {

    function handleSubmit(){
        console.log()
    }

    const [plantName,setPlantName] = useState("");
    

  return (
    <Form>
      <Form.Group className="mb-3" controlId="createPlantName">
        <Form.Label>Plant Name</Form.Label>
        <Form.Control type="text" placeholder="Enter plant name" onChange={e=>console.log(e.target.value)} />
        <Form.Text className="text-muted">
          This can be any informal name
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plant Species </Form.Label>
        <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e=>console.log(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={e=>console.log(e.target.files[0])}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plant Description</Form.Label>
        <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e=>console.log(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plant Requirements</Form.Label>
        <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e=>console.log(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="R240.00" onChange={e=>console.log(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default CreatePlantForm;