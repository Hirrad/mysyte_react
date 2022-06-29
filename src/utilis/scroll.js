import {scroller}  from "react-scroll";

const scroll =(container='container')=>{
return scroller.scrollTo(container,{
    spy:true,
smooth:true,
offset:0,
duration:500
})
}
export default scroll;