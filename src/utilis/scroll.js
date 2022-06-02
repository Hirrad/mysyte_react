import {scroller}  from "react-scroll";

const scroll =()=>{
return scroller.scrollTo('container',{
    spy:true,
smooth:true,
offset:0,
duration:500
})
}
export default scroll;