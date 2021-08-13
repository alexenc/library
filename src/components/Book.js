import axios from "axios"
import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import EditBook from "./EditBook"





function Book() {

    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [book, setBook] = useState([])
    const [toogle, setToogle] = useState(false)

    useEffect(() => {
        
        
        const apiCall = async () => {               
      
            //api call
            const url = 'https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/' + id
            setIsLoading(true)
            const result = await axios.get(url)
            setIsLoading(false)
            setBook(result.data)
            
            
          }
          apiCall()
          

    }, [id])

    const tf = () =>  {
        if(toogle){
            setToogle(false)
        } else {setToogle(true)}
    }
    
    
    

    return (
        <div>
        
            {isLoading && <h3>loading...</h3>  }          
            {toogle ? <EditBook toogle={tf} book={book}/> :
            <div className="book-area ">
                <div className="book-info">            
                <h2> Title :{book.title}</h2>
                <p>Author: {book.author}</p>
                <button onClick={tf}>Edit</button>
            </div>
            </div>}
            
        </div>
        
    )
}

export default Book
