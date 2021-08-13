import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"



function AddNewBook() {
    const [data, setData] = useState({
        tittle: '',
        author: '',
        pages: null,
        total_amount: null,
        isbn: null
    })
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()   

            const {title, author, pages, total_amount, isbn} = data
            axios.post('https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books', {title, author, pages, total_amount, isbn})
                .then(() => {
                    history.push('/');
                })
                .catch((error) => console.log(error));
        
        
    }

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    
    
    return (
        <div className="create">
            <h2>Add a new Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book title:</label>
                <input 
                    type="text"
                    required 
                    name="title"
                    onChange={onChangeHandler}
                    
                />
                <label>Author</label>
                <input 
                    type="text"
                    required     
                    name="author"
                    onChange={onChangeHandler}          
                />
                <label>Number of pages:</label>
                <input 
                    type="number"
                    required  
                    name="pages"
                    onChange={onChangeHandler}             
                />
                <label>Total amount:</label>
                <input 
                    type="number"
                    required   
                    name="total_amount"
                    onChange={onChangeHandler}            
                />
                <label>Isbn:</label>
                <input 
                    type="text"
                    required
                    name="isbn"
                    onChange={onChangeHandler}               
                />               
                <button type="submit">Add book</button>
               
                
            </form>
        </div>
    )
    
}

export default AddNewBook
