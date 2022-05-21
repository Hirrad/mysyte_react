import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Bars} from 'react-loader-spinner'
// import Loader from "react-loader-spinner";

// import './spinner.css'
const Spinner =() =>{
    // return <Loader
    //     type="Puff"
    //     color="#00BFFF"
    //     height={100}
    //     width={100}

    // />
    return <div className='d-flex justify-content-center align-items-center vh-100'>
        
        <Bars heigth="100"
     width="100"
      color="grey"
       ariaLabel="loading-indicator" />
        
    </div>
}
export default Spinner;