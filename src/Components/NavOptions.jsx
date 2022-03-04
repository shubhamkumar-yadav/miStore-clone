import React,{useState,useEffect} from 'react';
import { NavCard } from './NavCard';
import '../Styles/NavOptions.css';
const NavOptions = (props)=>{
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle,setRedmiPhoneToggle] = useState(false);
    const [tvToggle,setTvToggle] = useState(false);
    const [laptopToggle,setLaptopToggle] = useState(false);
    const [fitnessToggle,setFitnessToggle] = useState(false);
    const [homeToggle,setHomeToggle] = useState(false);
    const [audioToggle,setAudioToggle] = useState(false);
    const [accessoriesToggle,setAccessoriesToggle] = useState(false);
    useEffect(()=>{
        if(window.location.pathname === "/miphones"){
            return   setMiPhoneToggle(true)
        }
        if(window.location.pathname === "/redmiphones"){
            return   setRedmiPhoneToggle(true)
        }
        if(window.location.pathname === "/tv"){
            return   setTvToggle(true)
        }
        if(window.location.pathname === "/laptops"){
            return   setLaptopToggle(true)
        }
        if(window.location.pathname === "/fitnessAndLifeStyle"){
            return  setFitnessToggle(true)
        }
        if(window.location.pathname === "/home"){
            return  setHomeToggle(true)
        }
        if(window.location.pathname === "/audio"){
            return  setAudioToggle(true)
        }
        if(window.location.pathname === "/accessories"){
            return  setAccessoriesToggle(true)
        }
    },[]);
    return (<>
    <div className="navOptions">
        {miPhoneToggle?   props.miPhones.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {redmiPhoneToggle?   props.redmiPhones.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {tvToggle?   props.tv.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {laptopToggle ?   props.laptop.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {fitnessToggle?   props.fitnessAndLifeStyle.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {homeToggle?   props.home.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {audioToggle?   props.audio.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
        {accessoriesToggle?   props.accessories.map((item)=>< NavCard name={item.name} price={item.price} image={item.image} key={item.image} />) : null }
    </div>
    </>);
};
export {NavOptions};