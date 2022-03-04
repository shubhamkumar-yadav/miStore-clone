import React from 'react';
import { PreNavbar } from './Components/PreNavbar';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { Slider } from './Components/Slider';
import { Data } from './Data/Data';
import { Offers } from './Components/Offers';
import { Heading } from './Components/Heading';
import { StarProduct } from './Components/StarProduct';
import {HotAccessoriesMenu} from './Components/HotAccessoriesMenu';
import  {HotAccessories} from './Components/HotAccessories';
import { ProductReviews } from './Components/ProductReviews';
import { Videos } from './Components/Videos';
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';
import { NavOptions } from './Components/NavOptions';
const App = ()=>{
  return (<>
  <Router>
    <PreNavbar />
    <Navbar />
    <NavOptions miPhones={Data.miPhones} redmiPhones={Data.redmiPhones} tv={Data.tv} laptop={Data.laptop} fitnessAndLifeStyle={Data.fitnessAndLifeStyle} home={Data.home} audio={Data.audio} accessories={Data.accessories}/>
    <Slider link = {Data.banner.start}/>
    <Offers Offer = {Data.offer}/>
    <Heading text = "STAR PRODUCTS"/>
    <StarProduct starProduct = {Data.starProduct}/>
    <Heading text = "HOT ACCESSORIES"/>
    <HotAccessoriesMenu />
    <Route exact path="/music">
        <HotAccessories music={Data.hotAccessories.music} musicCover={Data.hotAccessoriesCover.music}/>
    </Route>
    <Route exact path="/smartDevice">
        <HotAccessories smartDevice={Data.hotAccessories.smartDevice} smartDeviceCover={Data.hotAccessoriesCover.smartDevice}/>
    </Route>
    <Route exact path="/home">
        <HotAccessories home={Data.hotAccessories.home} homeCover={Data.hotAccessoriesCover.home}/>
    </Route>
    <Route exact path="/lifestyle">
        <HotAccessories lifestyle={Data.hotAccessories.lifeStyle} lifestyleCover={Data.hotAccessoriesCover.lifeStyle}/>
    </Route>
    <Route exact path="/mobileAccessories">
        <HotAccessories mobileAccessories={Data.hotAccessories.mobileAccessories} mobileAccessoriesCover={Data.hotAccessoriesCover.mobileAccessories}/>
    </Route>
    <Heading text = "PRODUCT REVIEWS"/>
    <ProductReviews ProductReviews={Data.productReviews}/>
    <Heading text = "VIDEOS"/>
    <Videos videos={Data.videos} />
    <Heading text = "IN THE PRESS"/>
    <Banner link = {Data.banner.end} />
    <Footer footer={Data.footer}/>
  </Router>
  </>);
};
export {App};

