import React  from "react";
import {FinalOffers} from './FinalOffers.jsx';
import '../Styles/Offers.css';
const Offers = (props)=>{
    return (
        <>
        <div className="offersSection">
            {props.Offer.map((item,index)=><FinalOffers key={item.image} index={index} src={item.image} link={item.url} />)}
        </div>
        </>
    );
};
export {Offers};