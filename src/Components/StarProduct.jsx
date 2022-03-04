import React from 'react';
import '../Styles/StarProduct.css';
const StarProduct = (props)=>{
    return (<>
    <div className="starProduct">
        <div><a href={props.starProduct[0].url}><img src={props.starProduct[0].image} alt="StarProducts" /></a></div>
        <div>
            <a href={props.starProduct[1].url}><img src={props.starProduct[1].image} alt="StarProducts" /></a>
            <a href={props.starProduct[2].url}><img src={props.starProduct[2].image} alt="StarProducts" /></a>
            <a href={props.starProduct[3].url}><img src={props.starProduct[3].image} alt="StarProducts" /></a>
        </div>
    </div>
    </>);
};
export {StarProduct};