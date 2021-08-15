import axios from "axios"
import { useEffect, useState } from "react"
import {  Link, useParams } from "react-router-dom"
import useGet from "../hooks/useGet"
import EditBook from "./EditBook"





function Book() {
    
    const {id} = useParams()
    const {data: book, isLoading} = useGet(`https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/${id}`)
    const [toogle, setToogle] = useState(false)

    

    const toogleFunc = () =>  {
        setToogle(prev => !prev)
    }
    
    
    

    return (
        <div>
        
            {isLoading && <h3 className="loading">loading...</h3>  }          
            {toogle ? <EditBook toogle={toogleFunc} book={book}/> :
            <div className="book-area ">                
                <div className="book-info">     
                <p className="back-p"><Link to="/">⬅️ go back</Link></p>      
                <h2>📗  {book.title}</h2>
                <p>🧔 Author: <span>{book.author}</span></p>
                <p>📃 pages: <span>{book.pages}</span></p>
                <p>📚 total amount: <span>{book.total_amount}</span></p>
                <p>📇 isbn: <span>{book.isbn}</span></p>
                <button onClick={toogleFunc}>Edit</button>
            </div>
            </div>}
            
        </div>
        
    )
}

export default Book
