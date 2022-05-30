import React from "react";
import './page404.scss'
import compass from './img/compass.png'

const Page404 = ()=>{

    return <div className='page404'>
    {/* <Compass/> */}
    <p>404</p>


    <img src={compass} alt="" />
    <p>Ви загубилися</p>

{/* <img src="./img/compass.png" alt="" /> */}
    </div>
}
export default Page404