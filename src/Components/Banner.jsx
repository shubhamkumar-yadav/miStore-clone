import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = (props)=>{
    return (<>
    <Carousel fade>
        {props.link.map((item)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image}
              alt="SlidePics"
            />
            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read More ...</u>
            </Carousel.Caption>
          </Carousel.Item>
       ))}
    </Carousel>
    </>);
};
export {Banner};