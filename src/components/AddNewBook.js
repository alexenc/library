import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Error from "./Error"



function AddNewBook() {
    const [error, setError] = useState(false)
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
            
            //form validation
            if(title === '' || author === '' || pages < 1 || total_amount < 0 || isbn === ''){
                return setError(true)
            }
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
            {error ? <Error mesage={'all fields required and only numbers bigger than 0'}/> : null}
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
