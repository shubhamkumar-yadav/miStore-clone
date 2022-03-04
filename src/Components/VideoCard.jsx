import React from 'react';
import '../Styles/VideoCard.css';
const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
const VideoCard = (props)=>{
    return (<>
    <div className="videoCard" style={{backgroundImage:`url(${props.image})`}}>
        <a href="#/">{playButton}</a>
        <p>{props.name}</p>
    </div>
    </>);
};
export {VideoCard};