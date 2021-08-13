import axios from "axios"
import { useState } from "react"
import { useHistory  } from "react-router-dom"



function EditBook({toogle, book}) {

    const history = useHistory()

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

    return (        

        <div className="create">            
            <button onClick={toogle}>go back</button>
            <form>
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
                <button>Change</button>
            </form>
            <button onClick={deleteBook}>delete book</button>
        </div>
    )
}

export default EditBook
