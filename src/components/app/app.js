import React from "react";
import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../veriable/variable.scss'
import './app.scss';
import 'fslightbox';

import {withFreedomstoreService} from '../hoc';
import Header from "../header";
import Blog from "../blog";
import Gallery from "../gallery";
import Travel from "../travel";
// import {Page1} from "../pages";
import PhotoGallery from "../gallery/photo-gallery";
import Footer from "../footer";
// import NavigationBurger from "../navigation/navigation-burger";
const App = ({freedomstoreService}) =>{
       

    // console.log(freedomstoreService.getBlog())
    return<React.Fragment>
        {/* <NavigationBurger/> */}
        <span className='backgroundPic'></span> 
        <Header/>
        <div className='container'>
         
         
        
        
            <Routes>
            <Route path="/blog/:id?" element={<Blog/>}/>
            {/* <Route path="/gallery/:id?" element={<Gallery/>}/>  */}
            <Route path="/gallery" element={<Gallery/>}/> 
            <Route path="/photo" element={<PhotoGallery/>}/> 
            <Route path="/travel/:id?" element={<Travel/>}/>
            </Routes>
        

            <Footer/>
        </div> 
    </React.Fragment>



}

export default withFreedomstoreService()(App);