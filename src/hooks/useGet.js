import axios from "axios"
import { useEffect, useState } from "react"



function useGet(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const apiCall = async () => {              
        
        axios
            .get(url)
            .then((res) => {
                setIsLoading(true)
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                
                console.log(err)
            });
            
      }
    
    useEffect(() => {  
        
          apiCall()                    
          
    }, [url])
    
   
    

    return {data, isLoading}
   
}

export default useGet
