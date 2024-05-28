import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

import { useState } from 'react';

function CreatePlantForm() {
    const [plantName, setPlantName] = useState("");
    const [plantSpecies, setPlantSpecies] = useState("");
    const [plantImage, setPlantImage] = useState(null);
    const [plantDesc, setPlantDesc] = useState("");
    const [plantReq, setPlantReq] = useState("");
    const [plantPrice, setPlantPrice] = useState(0);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', plantName);
        formData.append('species', plantSpecies);
        formData.append('image', plantImage);
        formData.append('description', plantDesc);
        formData.append('requirements', plantReq);
        formData.append('price', plantPrice);

        try {
            const plantResponse = await axios.post('http://localhost:5000/api/plants/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage("Plant created successfully");
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="createPlantName">
                <Form.Label>Plant Name</Form.Label>
                <Form.Control type="text" placeholder="Enter plant name" onChange={e => setPlantName(e.target.value)} />
                <Form.Text className="text-muted">
                    This can be any informal name
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantSpecies">
                <Form.Label>Plant Species</Form.Label>
                <Form.Control type="text" placeholder="Enter plant scientific name" onChange={e => setPlantSpecies(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control type="file" onChange={e => setPlantImage(e.target.files[0])} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantDescription">
                <Form.Label>Plant Description</Form.Label>
                <Form.Control type="text" placeholder="Enter plant description" onChange={e => setPlantDesc(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantRequirements">
                <Form.Label>Plant Requirements</Form.Label>
                <Form.Control type="text" placeholder="Enter plant requirements" onChange={e => setPlantReq(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter plant price" onChange={e => setPlantPrice(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {message && <p>{message}</p>}
        </Form>
    );
}

export default CreatePlantForm;
