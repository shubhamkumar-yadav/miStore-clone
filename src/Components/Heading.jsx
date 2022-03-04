import React from 'react';
import '../Styles/heading.css';
const Heading = (props)=>{
    return (
        <>
        <div className="heading">
            <div></div>
            <p>{props.text}</p>
            <div></div>
        </div>
        </>
    );
};
export {Heading};