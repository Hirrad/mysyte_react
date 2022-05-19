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
import PhotoGallery from "../gallery/photo-gallery";
import Footer from "../footer";
// import BlogItem from "../blog/blog-item";
import { Page } from "../pages";
const App = ({freedomstoreService}) =>{
           

    // console.log(freedomstoreService.getBlog())
    return<React.Fragment>
        {/* <NavigationBurger/> */}
        <span className='backgroundPic'></span> 
        <Header/>
        <div className='container'>
         
         
        
        
            <Routes>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<Page/>}>
            </Route>
            <Route path="/gallery" element={<Gallery/>}/> 
            <Route path="/gallery/:id" element={<PhotoGallery/>}/> 
            <Route path="/travel" element={<Travel/>}/>
            <Route path="/travel/:id" element={<Page/>}/>
            <Route path="/about" element={<Page/>}/>
            <Route path="/about" element={<Page/>}/>
            </Routes>
        

            <Footer/>
        </div> 
    </React.Fragment>



}

export default withFreedomstoreService()(App);