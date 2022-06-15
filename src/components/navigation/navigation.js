import React, {useState, useEffect} from "react";
import './navigation.scss'
import NavigationPc from "./navigation-pc";
import NavigationBurger from "./navigation-burger";
import useFetch from '../../hooks/useFetch'
const Navigation =()=> {
    // const [mobile, setMobile]=useState(document.documentElement.clientWidth)
    const [db, setDb]= useState([])
    const url='/navigations'
    const [{response, isLoading, error},doFetch]=useFetch(url);
    // console.log(mobile)
    // const widthScreen= ()=>{
        // setMobile(document.documentElement.clientWidth)
    // }
useEffect(() => {
    doFetch();
},[doFetch])
// useEffect(() => {
//    return window.addEventListener("resize",widthScreen)
    // 
// },[mobile])
useEffect(() => {
    if(!response) return
    setDb(response)
},[response])

       return(
        //    !isLoading&&response&&db.length!==0?(mobile<=980)?
        //    <NavigationBurger db={db}/>:<NavigationPc db={db}/>:null   
        !isLoading&&response&&db.length!==0&&<NavigationPc db={db}/> 
       ) 
}


export default Navigation;

