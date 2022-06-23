import { useState, useEffect,useCallback} from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
const  useFetch =  (url) =>{
    
    const _baseUrl='http://localhost:1337/api';
    // const _baseUrl='https://freedomapi.herokuapp.com/api';
    // const _baseUrl='http://192.168.105:1337/api';


    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [manuallyToken, setManuallyToken] = useState({})
    const [option, setOption] = useState({})
    const[tokenJWS]=useLocalStorage('tokenJWS');    
    const  doFetch = useCallback((option = {},haveToken=true) => {
        setOption(option);
        setManuallyToken(haveToken)
        setIsLoading(true);
    },[])
    useEffect(() => {
        let token;
        if(typeof manuallyToken==='boolean'){
             token=tokenJWS?`Bearer ${tokenJWS}`:'';

        }
        else{
            token=`Bearer ${manuallyToken}`
        }
        // console.log(token)
        
        const requestOptions ={
            ...option,
            ...{
                // headers:{
                //     authorization:tokenJWS?`Bearer ${tokenJWS}`:''
                // }
                headers:{
                        authorization:token
                    }
            }
        }
        if (!isLoading) return
        axios({
            ...requestOptions,
            url: _baseUrl + url

        })
            .then(res => {
                // console.log('success', res);
                setResponse(res.data)
                setIsLoading(false);
            }).catch(error => {
            // console.log('error', error);
            setIsLoading(false);
            setError(error.response)
        })
    },[isLoading,option,url,manuallyToken,tokenJWS])

    return [{response, isLoading, error}, doFetch]
}
export default useFetch;