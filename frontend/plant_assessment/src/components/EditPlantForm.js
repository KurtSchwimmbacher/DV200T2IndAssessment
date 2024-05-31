import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

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

    const handleSubmitEditPlant = async (e) => {
        e.preventDefault();

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
        }
    };

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What plant would you like to edit</Form.Label>
                    <Form.Control type="text" placeholder="Enter the plant you want to edit" onChange={e => setPlantToFind(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmitFindPlant}>
                    Submit
                </Button>
                {message && <p>{message}</p>}
            </Form>

            {plantData && <Form>
                <img src={`http://localhost:7000/plant-images/${plantData.image}`} alt='plant image' style={{ width: 300 }} />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Plant Name</Form.Label>
                    <Form.Control type="text" placeholder={plantData.name} onChange={e => setPlantName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Plant Species</Form.Label>
                    <Form.Control type="text" placeholder={plantData.species} onChange={e => setPlantSpecies(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" onChange={e => setPlantImage(e.target.files[0])} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Plant Description</Form.Label>
                    <Form.Control type="text" placeholder={plantData.description} onChange={e => setPlantDesc(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Plant Requirements</Form.Label>
                    <Form.Control type="text" placeholder={plantData.requirements} onChange={e => setPlantReq(e.target.value)} />
                    <Form.Text className="text-muted">
                        Separate requirements with a comma
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Plant Price</Form.Label>
                    <Form.Control type="text" placeholder={plantData.price} onChange={e => setPlantPrice(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmitEditPlant}>
                    Edit Plant
                </Button>
                <Button variant="primary" type="submit">
                    Delete Plant Entry
                </Button>
            </Form>}
        </>
    );
}

export default EditPlantForm;
