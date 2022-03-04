import React from 'react';
import '../Styles/ProductReviewCard.css';
const ProductReviewCard = (props)=>{
    return (<>
    <div className="ProductReviewCard">
        <img src={props.image} alt={`${props.key}Image`} />
        <h5>{props.review}</h5>
        <span>{props.name}</span>
        <b>{props.price}</b>
    </div>
    </>);
};
export {ProductReviewCard};