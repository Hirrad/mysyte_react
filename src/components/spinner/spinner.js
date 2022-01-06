import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import './spinner.css'
const Spinner =() =>{
    return <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}

    />
}
export default Spinner;