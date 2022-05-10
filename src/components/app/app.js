import React from "react";
import {Route,BrowserRouter, Routes} from 'react-router-dom'
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

const url ='https://baksman.org/';

const App = ({freedomstoreService}) =>{
    const i=0;
        while(i){
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                });
            }
        

    // console.log(freedomstoreService.getBlog())
    return<React.Fragment>
        {/*<NavigationBurger/>*/}
        <span className='backgroundPic'></span>
        <Header/>
        <div className='container'>
        <BrowserRouter>
            <Routes>
            <Route path="/blog/:id?" element={Blog}/>
                <Route path="/gallery/:id?" element={Gallery}/>
                {/*<Route path="/page1" element={Page1}/>*/}
                <Route path="/photo" element={PhotoGallery}/>
                {/*<Route path="/about" element={About}/>*/}
                <Route path="/travel/:id?" element={Travel}/>
            </Routes>
        </BrowserRouter>

            <Footer/>
        </div>
    </React.Fragment>



}

export default withFreedomstoreService()(App);