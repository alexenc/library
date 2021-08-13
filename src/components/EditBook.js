import axios from "axios"
import { useState } from "react"
import { useHistory  } from "react-router-dom"
import Error from "./Error"



function EditBook({toogle, book}) {

    const history = useHistory()
    const [error, setError] = useState(false)
    const [newInfo, setNewInfo] = useState({
        title: book.title,
        author: book.author,
        pages: book.pages,
        total_amount: book.total_amount,
        isbn: book.isbn
    })

    const onChangeHandler = (e) => {
        

        const {name, value} = e.target        
        setNewInfo(            
            { 
                ...newInfo,
                [name]: value
            }
            )

    }

    const deleteBook = (e) => {
        axios.delete('https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/' + book.id)
            .then(() => {
                history.push('/');
            })
            .catch((error) => console.log(error));
    }

    const updateInfo = (e) => {
        e.preventDefault()  
        


            const {title, author, pages, total_amount, isbn} = newInfo
            //form validation
            if(title === '' || author === '' || pages < 1 || total_amount < 0 || isbn === ''){
                return setError(true)
            }
            axios.put(`https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/${book.id}`, {title, author, pages, total_amount, isbn})
                .then(() => {
                    history.push('/');
                })
                .catch((error) => console.log(error));
                setError(false)
    }

    return (        

        <div className="create">            
            <button onClick={toogle}>go back</button>
            <form onSubmit={updateInfo}>
                {error ? <Error mesage={'all fields required or invalid numbers'}/> : null}
                <label>Title:</label>
                <input onChange={e => onChangeHandler(e)} name={'title'} type="text"  placeholder={newInfo.title}/>
                <label>Author</label>
                <input onChange={e => onChangeHandler(e)} name={'author'}  type="text" value={newInfo.author}/>
                <label>Pages:</label>
                <input onChange={e => onChangeHandler(e)} name={'pages'} type="number" value={newInfo.pages}/>
                <label>Total amount:</label>
                <input onChange={e => onChangeHandler(e)} name={'total_amount'} type="number" value={newInfo.total_amount}/>
                <label>Isbn:</label>
                <input onChange={e => onChangeHandler(e)} name={'isbn'} type="text" value={newInfo.isbn}/>
                <button type="submit">Change</button>
            </form>
            <button onClick={deleteBook}>delete book</button>
        </div>
    )
}

export default EditBook
