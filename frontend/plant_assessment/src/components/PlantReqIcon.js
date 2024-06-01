import { useState, useEffect } from 'react';
import fullSun from '../assets/Icons/day-forecast-hot-svgrepo-com.svg';
import regSun from '../assets/Icons/forecast-sun-sunrise-svgrepo-com.svg';
import lowSun from '../assets/Icons/forecast-moon-night-svgrepo-com.svg';
import freqWater from '../assets/Icons/climate-cloud-forecast-2-svgrepo-com.svg';
import regWater from '../assets/Icons/climate-cloud-forecast-3-svgrepo-com.svg';
import lowWater from '../assets/Icons/climate-cloud-forecast-svgrepo-com.svg';
import lowHumid from '../assets/Icons/climate-forecast-minus-svgrepo-com.svg';
import highHumid from '../assets/Icons/climate-forecast-plus-svgrepo-com.svg';

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
            case "Indirect Sunlight":
                setIconImg(regSun);
                setAlt(props.condition);
                break;
            case "Low Light":
                setIconImg(lowSun);
                setAlt(props.condition);
                break;
            case "Frequent Water":
                setIconImg(freqWater);
                setAlt(props.condition);
                break;
            case "Regular Water":
                setIconImg(regWater);
                setAlt(props.condition);
                break;
            case "Infrequent Water":
                setIconImg(lowWater);
                setAlt(props.condition);
                break;
            case "Low Humidity":
                setIconImg(lowHumid);
                setAlt(props.condition);
                break;
            case "High Humidity":
                setIconImg(highHumid);
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
