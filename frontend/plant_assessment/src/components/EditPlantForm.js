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
    const [plantReq,setPlantReq] = useState("");
    const [plantImg, setPlantImage] = useState("");
    const [plantPrice, setPlantPrice] = useState("");

    const handleSubmitEditPlant = async (e) =>{
        e.preventDefault();
        if(plantName != ""){
            console.log(plantName)
        }
        else{
            console.log('no fields updated')
        }
    }
    
    const handleSubmitFindPlant = async (e) => {
        e.preventDefault();
        console.log(plantToFind)

        try{
            const response = await axios.post('http://localhost:5000/api/plants/find', { name: plantToFind });
            console.log(response.data)
            if(response.data){
                setMessage(response.data.message)
                setPlantData(response.data.plant)
            }
        }
        catch(error){
            console.log("error fetching plant")
        }
    }

  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What plant would you like to edit</Form.Label>
                <Form.Control type="text" placeholder="Enter the plant you want to edit" onChange={e=>setPlantToFind(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmitFindPlant}>
                Submit
            </Button>
            {message && <p>{message}</p>}
        </Form>

        {plantData && <Form>
            <img src={`http://localhost:5000/plant-images/${plantData.image}`} alt='plant image'  style={{width:300}}/>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Plant Name</Form.Label>
                <Form.Control type="text" placeholder={plantData.name} onChange={e=>setPlantName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Plant Species</Form.Label>
                <Form.Control type="text" placeholder={plantData.species} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Plant Description</Form.Label>
                <Form.Control type="text" placeholder={plantData.description} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Plant Requirements</Form.Label>
                <Form.Control type="text" placeholder={plantData.requirements} />
                <Form.Text className="text-muted">
                    Seperate requirements with a comma
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Plant Price</Form.Label>
                <Form.Control type="text" placeholder={plantData.price} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmitEditPlant} >
                Submit
            </Button>
        </Form>}
    </>
  );
}

export default EditPlantForm;