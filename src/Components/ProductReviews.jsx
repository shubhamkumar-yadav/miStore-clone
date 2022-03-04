import React from 'react';
import {ProductReviewCard} from './ProductReviewCard.jsx';
import '../Styles/ProductReviews.css';
const ProductReviews = (props)=>{
    return (<>
    <div className="ProductReviews">
        {props.ProductReviews.map((item,index)=><ProductReviewCard price={item.price} name={item.name} key={index} index={index} image={item.image} review={item.review}/>)}
    </div>
    </>);
};
export {ProductReviews};