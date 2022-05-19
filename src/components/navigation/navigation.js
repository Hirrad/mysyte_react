import React, {useState, useEffect} from "react";
import './navigation.scss'
import NavigationPc from "./navigation-pc";
import NavigationBurger from "./navigation-burger";

const Navigation =()=> {
    const [mobile, setMobile]=useState(document.documentElement.clientWidth)
    console.log(mobile)
    const widthScreen= ()=>{
        setMobile(document.documentElement.clientWidth)
    }

useEffect(() => {
   return window.addEventListener("resize",widthScreen)
    
},[mobile])
       return (mobile<=980)?<NavigationBurger/>:<NavigationPc/>   
}


export default Navigation;





// class Navigation extends Component {
//     state = {
//         mobile: document.documentElement.clientWidth
//     }



// widthScreen= (e)=> {
//         if(document.documentElement.clientWidth!==this.state.mobile)
//         {
//             let mobile=document.documentElement.clientWidth;
//             this.setState({mobile})
//         }

// }
// componentDidMount() {
//         window.addEventListener("resize",this.widthScreen)

// }
// componentWillUnmount() {
//     window.removeEventListener("resize",this.widthScreen);
// }


//     render() {
//        let {mobile}=this.state;
//        // console.log(mobile);
//         return (mobile<=980)?<NavigationBurger/>:<NavigationPc/>

//     }
// }


// export default Navigation;
