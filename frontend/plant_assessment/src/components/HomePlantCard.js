import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

import begonia from '../assets/begonia-close-up.jpg';
import succulent from '../assets/succulant-close-up.jpg';
import orchid from '../assets/orchid-close-up.jpg';
import snake from '../assets/snakeplant-close-up.jpg';
import lilly from '../assets/peacelilly-close-up.jpg';
import pothos from '../assets/pothos-close-up.jpg';

function HomePlantCard(props) {
    const [plantType, setPlantType] = useState("");
    const [plantDetails, setPlantDetails] = useState("");
    const [plantImage, setPlantImage] = useState();

    useEffect(() => {
        switch (props.category) {
            case "card1":
                if (!props.indoors) {
                    setPlantType("Begonias");
                    setPlantDetails("Begonias are versatile outdoor plants. Begonia flowers usually have four-colored tepals in two pairs of different sizes. Flower colors are pink, red, yellow, or white, with the ovary below of the same color.");
                    setPlantImage(begonia);
                } else {
                    setPlantType("Snake Plant");
                    setPlantDetails("Snake Plants not only endure low light environments but also purify air rapidly, making it ideal for a bedroom.");
                    setPlantImage(snake);
                }
                break;
            case "card2":
                if (!props.indoors) {
                    setPlantType("Succulents");
                    setPlantDetails("Succulent plants are drought-resistant plants in which the leaves, stem, or roots have become more than usually fleshy by the development of water-storing tissue");
                    setPlantImage(succulent);
                } else {
                    setPlantType("Peace Lilly");
                    setPlantDetails("Peace lilies make an excellent choice for both the home or office, and along with their dark green foliage and beautiful white flowers, they are great for cleaning the air of the room they’re in. ");
                    setPlantImage(lilly);
                }
                break;
            case "card3":
                if (!props.indoors) {
                    setPlantType("Orchids");
                    setPlantDetails("The flower of the orchid plant is colorful, fragrant and can vary in sizes from microscopic plants to long vines to gigantic plants. ");
                    setPlantImage(orchid);
                } else {
                    setPlantType("Pothos");
                    setPlantDetails("Pothos will thrive in a variety of low light environments, and can be potted regularly or from hanging pots, making them ideal for decorative plants around a house.");
                    setPlantImage(pothos);
                }
                break;
            default:
                break;
        }
    }, [props.category, props.indoors]); // Include props.indoors in the dependency array

    return (
        <Card className='home-card'>
            <Card.Img variant="top" src={plantImage} className='home-card-image' />
            <Card.ImgOverlay className='home-card-overlay'>
                <Card.Body className='home-card-body'>
                    <Card.Title className='home-card-title'>{plantType}</Card.Title>
                    <Card.Text className='home-card-text'>
                        {plantDetails}
                    </Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    );
}

export default HomePlantCard;
