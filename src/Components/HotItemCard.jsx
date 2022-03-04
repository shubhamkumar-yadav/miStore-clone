import React from 'react';
import '../Styles/HotItemCard.css';
const HotItemCard = (props)=>{
    return (<>
    <div className="HotItemCard">
        <img src={props.image} alt="Image" />
        <p>{props.name}</p>
        <span>{props.price}</span>
    </div>
    </>);
};
export {HotItemCard};