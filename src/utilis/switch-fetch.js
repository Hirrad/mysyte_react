// import {useLocation,useParams} from 'react-router-dom'

const switchFetch=(path,param)=>{
// console.log(path,param)
// const path=useLocation().pathname.replaceAll(/[^A-Za-z]/g,"");
// const param =useParams(id)?useParams(id):'';
let apiFetch;
 switch(path.replaceAll(/[^A-Za-z]/g,"")){
case 'travel':
    apiFetch= `/on-a-hikes/${param}`;
    break;
    case 'blog':
    apiFetch= `/blogs/${param}`;
    break;
    case 'about':
    apiFetch= '/about-me';
    break;
    default:
        apiFetch= ''
}
return apiFetch
}
export default switchFetch;