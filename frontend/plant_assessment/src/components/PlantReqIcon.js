import { useState, useEffect } from 'react';
import fullSun from '../assets/Icons/clear-svgrepo-com.svg';
import freqWater from '../assets/Icons/heavy-rain-svgrepo-com.svg';


function PlantReqIcon(props) {

    const [iconImg,setIconImg] = useState();
    const [alt, setAlt] = useState("");

    console.log(props.condition)

    const setIcon = () => {
        switch (props.condition) {
            case "Direct Sunlight":
                setIconImg(fullSun);
                setAlt(props.condition);
                break;
            case "Frequent Water":
                setIconImg(freqWater);
                setAlt(props.condition);
                break;
            default:
                // Handle other conditions if needed
                break;
        }
    };

    // Call setIcon when the component mounts or when props.condition changes
    useEffect(() => {
        setIcon();
    }, [props.condition]);
  
    return ( 
        <>
            <img src={iconImg} alt={alt} className='plant-req-icon'></img>
        </>
    );
}

export default PlantReqIcon;
