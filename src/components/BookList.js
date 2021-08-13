import { useEffect, useState } from "react"
import BookCard from "./BookCard"
import axios from "axios"

function BookList() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        
        
        const apiCall = async () => {               
      
            //api call
            const url = 'https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books'
            setIsLoading(true)
            const result = await axios.get(url)
            setIsLoading(false)
            setData(result.data)
          }
          apiCall()

    }, [])

    return (
        <div>
            <div className="title">
                <h2 className="h2">📚 All Books</h2> 
            </div> 
            <div className="main-container">                     
                <div className="book-container">
                {isLoading && <h3>loading...</h3>}            
                {data.map(book => (
                    <BookCard
                        key={book.id}
                        title={book.title}
                        author={book.author}
                        id={book.id}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default BookList
