import React from 'react';
import '../Styles/NavCard.css';
const NavCard =(props)=>{
    return (<>
    <div className="NavCard">
        <img src={props.image} alt={`${props.index} phone`} />
        <p>{props.name}</p>
        <span>{props.price}</span>
    </div>
    </>);
};
export {NavCard};