import { useState, useEffect,useCallback} from "react";
import axios from "axios";

const  useFetch =  (url) =>{
    const _baseUrl='http://localhost:1337/api';
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [option, setOption] = useState({})

    const doFetch = useCallback((option = {}) => {
        setOption(option);
        setIsLoading(true);
    },[])
    useEffect(() => {
        const requestOptions ={
            ...option,
            ...{
                headers:{
                    // authorization:token?`Token ${token}`:''
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
            setError(error)
        })
    },[isLoading,option,url])

    return [{response, isLoading, error}, doFetch]
}
export default useFetch;