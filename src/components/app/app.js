import React, {useEffect, useState,useContext}from "react";
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
import Spinner from "../spinner";
import Page404 from "../page404";
// import Navigation from "../navigation";
import NavigationInPage from "../navigation/navigation-in-page"
import PageError from "../page-error"
import Authentication from "../authorization"
// import  {useFetch}  from "../../hooks";
// import BlogItem from "../blog/blog-item";
import { Page } from "../pages";
import { CurrentUserContext } from "../freedomstore-service-context";
// https://freedomapi.herokuapp.com/api
const App = ({freedomstoreService}) =>{
    // const [{ isLoading, error},doFetch]= useFetch('/');
const[currentUserState]=useContext(CurrentUserContext)
    const [load, setLoad]=useState(false)
   
    const pageLoad= ()=>{
        setLoad(true)
    }

useEffect(() => {
    // doFetch();
   return window.addEventListener("load",pageLoad)
    
},[load])
 

if(!load) return <Spinner/>
if(currentUserState.error&&currentUserState.error.code==='ERR_NETWORK'){
    return <PageError/>
}
    return <React.Fragment>
        {/* <NavigationBurger/> */}
        
        <span className='backgroundPic'>
        {/* <Navigation/> */}
        </span> 
        
        <Header/>
        <div className='container'>
{       <NavigationInPage />}         
        
        
            <Routes>
            <Route path="/" element={<Gallery/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<Page/>}>
            </Route>
            <Route path="/gallery" element={<Gallery/>}/> 
            <Route path="/gallery/:id" element={<PhotoGallery/>}/> 
            <Route path="/travel" element={<Travel/>}/>
            <Route path="/travel/:id" element={<Page/>}/>
            <Route path="/about" element={<Page/>}/> 
            
            {/* <Route path="/auth" element={<Authentication/>}/>*/}
            <Route path="*" element={<Page404/>}/>
            </Routes>
        

            <Footer/>
        </div> 
    </React.Fragment>



}

export default App;