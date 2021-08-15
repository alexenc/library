import { useEffect, useState } from "react"
import BookCard from "./BookCard"
import axios from "axios"
import useGet from "../hooks/useGet"

function BookList() {

   const { data, isLoading } = useGet('https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books')
    console.log(isLoading)

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
