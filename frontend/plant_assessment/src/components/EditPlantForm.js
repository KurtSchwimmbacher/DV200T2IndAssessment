import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function EditPlantForm() {
    const [plantToFind, setPlantToFind] = useState("");
    const [plantData, setPlantData] = useState(null);
    const [message, setMessage] = useState("");

    const [plantName, setPlantName] = useState("");
    const [plantSpecies, setPlantSpecies] = useState("");
    const [plantDesc, setPlantDesc] = useState("");
    const [plantReq, setPlantReq] = useState("");
    const [plantImage, setPlantImage] = useState(null);
    const [plantPrice, setPlantPrice] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        if (!plantName && !plantData?.name) formErrors.plantName = "Plant name is required";
        if (!plantSpecies && !plantData?.species) formErrors.plantSpecies = "Plant species is required";
        if (!plantDesc && !plantData?.description) formErrors.plantDesc = "Plant description is required";
        if (!plantReq && !plantData?.requirements) formErrors.plantReq = "Plant requirements are required";
        if (!plantPrice && !plantData?.price) {
            formErrors.plantPrice = "Plant price is required";
        } else if (plantPrice <= 0) {
            formErrors.plantPrice = "Plant price must be a positive number";
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmitEditPlant = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = new FormData();
        formData.append('name', plantName || plantData.name);
        formData.append('species', plantSpecies || plantData.species);
        formData.append('description', plantDesc || plantData.description);
        formData.append('requirements', plantReq || plantData.requirements);
        formData.append('price', plantPrice || plantData.price);

        if (plantImage) {
            formData.append('image', plantImage);
        }

        try {
            const plantUpdate = await axios.patch(`http://localhost:7000/api/plants/update/${plantData._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(plantUpdate);
            alert("Plant edited");

            // Reset the form fields
            setPlantToFind("");
            setPlantData(null);
            setPlantName("");
            setPlantSpecies("");
            setPlantDesc("");
            setPlantReq("");
            setPlantImage(null);
            setPlantPrice("");
            setMessage("");
            setErrors({});
        } catch (error) {
            console.log(error);
            alert("There was an error editing the plant");
        }
    };

    const handleSubmitFindPlant = async (e) => {
        e.preventDefault();
        console.log(plantToFind);

        try {
            const response = await axios.post('http://localhost:7000/api/plants/find', { name: plantToFind });
            console.log(response.data);
            if (response.data) {
                setMessage(response.data.message);
                setPlantData(response.data.plant);
            }
        } catch (error) {
            console.log("Error fetching plant");
            setMessage("Error fetching plant");
        }
    };

    const handleDeletePlant = async (e) => {
        e.preventDefault();
        const plantID = plantData._id;
        console.log(plantID);
        try {
            const deleteResponse = await axios.delete(`http://localhost:7000/api/plants/delete/${plantID}`);
            console.log(deleteResponse);
            alert("Plant deleted");

            // Reset the form fields
            setPlantToFind("");
            setPlantData(null);
            setPlantName("");
            setPlantSpecies("");
            setPlantDesc("");
            setPlantReq("");
            setPlantImage(null);
            setPlantPrice("");
            setMessage("");
            setErrors({});
        } catch (error) {
            console.log(error);
            alert("Error deleting plant");
        }
    };

    return (
        <>
        <Container>
            <Row>
                <Col className="col-6">
                    <Form onSubmit={handleSubmitFindPlant} className='edit-plant-form-find'>
                        <Form.Group className="mb-3" controlId="formPlantToFind">
                            <Form.Label>What plant would you like to edit</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the plant you want to edit"
                                onChange={e => setPlantToFind(e.target.value)}
                                isInvalid={!!errors.plantToFind}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.plantToFind}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        {message && <Alert variant="info" className="mt-3 plant-found-alert">{message}</Alert>}
                    </Form>

                    {plantData && (
                        <Form onSubmit={handleSubmitEditPlant} className='edit-plant-form-details'>
                            <h1 className='edit-plant-title'>Edit <b className='green-title-word'>Plant Details</b> Below</h1>
                            <Form.Group className="mb-3" controlId="formPlantName">
                                <Form.Label>Plant Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={plantData.name}
                                    onChange={e => setPlantName(e.target.value)}
                                    isInvalid={!!errors.plantName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.plantName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPlantSpecies">
                                <Form.Label>Plant Species</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={plantData.species}
                                    onChange={e => setPlantSpecies(e.target.value)}
                                    isInvalid={!!errors.plantSpecies}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.plantSpecies}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload Image</Form.Label>
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
                                <Form.Label>Plant Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={plantData.description}
                                    onChange={e => setPlantDesc(e.target.value)}
                                    isInvalid={!!errors.plantDesc}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.plantDesc}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPlantRequirements">
                                <Form.Label>Plant Requirements</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={plantData.requirements}
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
                                <Form.Label>Plant Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder={plantData.price}
                                    onChange={e => setPlantPrice(e.target.value)}
                                    isInvalid={!!errors.plantPrice}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.plantPrice}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Edit Plant
                            </Button>
                            <Button className="delete-btn ms-2" variant="danger" type="button" onClick={handleDeletePlant}>
                                Delete Plant Entry
                            </Button>
                        </Form>
                    )}
                </Col>
                <Col className="col-6"></Col>
            </Row>
        </Container>

        <div className="edit-plant-img-con">
            {plantData && <img src={`http://localhost:7000/plant-images/${plantData.image}`} alt='plant image' className='edit-plant-img' />}
                        
        </div>

        </>
    );
}

export default EditPlantForm;
