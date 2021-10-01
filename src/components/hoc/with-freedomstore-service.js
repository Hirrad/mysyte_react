import React from "react";
import {FreedomstoreServiceConsumer} from "../freedomstore-service-context";

const withFreedomstoreService =()=> (Wrapped)=>{
    return (props) =>{
return(
    <FreedomstoreServiceConsumer>
        {
            (freedomstoreService)=>{
                return(
                    <Wrapped {...props} freedomstoreService={freedomstoreService}/>
                )
            }
        }
    </FreedomstoreServiceConsumer>
)
    }
}
export default withFreedomstoreService;