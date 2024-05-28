import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

import { useState } from 'react';

function CreatePlantForm() {

    const [plantName,setPlantName] = useState("");
    const [plantSpecies, setPlantSpecies] = useState("");
    const [plantImage,setPlantImage] = useState();
    const [plantDesc, setPlantDesc] = useState("");
    const [plantReq, setPlantReq] = useState("");
    const [plantPrice, setPlantPrice] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(plantImage)

        try{
            const plantResponse = await axios.post('http://localhost:5000/api/plants/create',{
                // put fields from schema
                name: plantName,
                species: plantSpecies,
                image: plantImage,
                description: plantDesc,
                requirements: plantReq,
                price: plantPrice,
            });
            setMessage("plant created successfully");
        }
        catch (error){
            setMessage("error creating plant");
        }
    }



  return (
    <Form>
      <Form.Group className="mb-3" controlId="createPlantName">
        <Form.Label>Plant Name</Form.Label>
        <Form.Control type="text" placeholder="Enter plant name" onChange={e=>setPlantName(e.target.value)} />
        <Form.Text className="text-muted">
          This can be any informal name
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plant Species </Form.Label>
        <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e=>setPlantSpecies(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" onChange={e=>setPlantImage(e.target.files[0])}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plant Description</Form.Label>
        <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e=>setPlantDesc(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Plant Requirements</Form.Label>
        <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e=>setPlantReq(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="R240.00" onChange={e=>setPlantPrice(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      {message && <p>{message}</p>}
    </Form>
  );
}

export default CreatePlantForm;