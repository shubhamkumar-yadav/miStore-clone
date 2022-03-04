import React from 'react';
import { VideoCard } from './VideoCard';
import '../Styles/Videos.css';
const Videos = (props)=>{
    return (<>
    <div className="videos">
        {props.videos.map((item,index)=><VideoCard index={index} key={index} image={item.image} name={item.name}/>)}
    </div>
    </>);
};
export {Videos};