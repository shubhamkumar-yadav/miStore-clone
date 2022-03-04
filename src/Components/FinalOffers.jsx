import React  from "react";
const FinalOffers = (props)=>{
    return (
        <>
        <a href={props.link}><img src={props.src} alt={`${props.index} Offer`} /></a>
        </>
    );
};
export {FinalOffers};