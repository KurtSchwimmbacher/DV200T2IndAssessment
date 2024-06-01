import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useState } from 'react';

function CreatePlantForm() {
    const [plantName, setPlantName] = useState("");
    const [plantSpecies, setPlantSpecies] = useState("");
    const [plantImage, setPlantImage] = useState(null);
    const [plantDesc, setPlantDesc] = useState("");
    const [plantReq, setPlantReq] = useState("");
    const [plantPrice, setPlantPrice] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (!plantName) formErrors.plantName = "Plant name is required";
        if (!plantSpecies) formErrors.plantSpecies = "Plant species is required";
        if (!plantImage) formErrors.plantImage = "Plant image is required";
        if (!plantDesc) formErrors.plantDesc = "Plant description is required";
        if (!plantReq) formErrors.plantReq = "Plant requirements are required";
        if (!plantPrice || plantPrice <= 0) formErrors.plantPrice = "Plant price must be a positive number";

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = new FormData();
        formData.append('name', plantName);
        formData.append('species', plantSpecies);
        formData.append('image', plantImage);
        formData.append('description', plantDesc);
        formData.append('requirements', plantReq);
        formData.append('price', plantPrice);

        try {
            const plantResponse = await axios.post('http://localhost:7000/api/plants/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage("Plant created successfully");
            alert("Plant created successfully");
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className='create-plant-form'>
            <Form.Group className="mb-3" controlId="createPlantName">
                <Form.Label className='form-label'>Plant Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter plant name"
                    onChange={e => setPlantName(e.target.value)}
                    isInvalid={!!errors.plantName}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.plantName}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    This can be any informal name
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantSpecies">
                <Form.Label className='form-label'>Plant Species</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter plant scientific name"
                    onChange={e => setPlantSpecies(e.target.value)}
                    isInvalid={!!errors.plantSpecies}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.plantSpecies}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className='form-label'>Upload Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={e => setPlantImage(e.target.files[0])}
                    isInvalid={!!errors.plantImage}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.plantImage}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantDescription">
                <Form.Label className='form-label'>Plant Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter plant description"
                    onChange={e => setPlantDesc(e.target.value)}
                    isInvalid={!!errors.plantDesc}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.plantDesc}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantRequirements">
                <Form.Label className='form-label'>Plant Requirements</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter plant requirements"
                    onChange={e => setPlantReq(e.target.value)}
                    isInvalid={!!errors.plantReq}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.plantReq}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                    Separate requirements with a comma
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlantPrice">
                <Form.Label className='form-label'>Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter plant price"
                    onChange={e => setPlantPrice(e.target.value)}
                    isInvalid={!!errors.plantPrice}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.plantPrice}
                </Form.Control.Feedback>
            </Form.Group>
            <Button className='submit-btn' type="submit">
                Submit
            </Button>
            {message && <Alert variant="success" className="mt-3">{message}</Alert>}
        </Form>
    );
}

export default CreatePlantForm;
