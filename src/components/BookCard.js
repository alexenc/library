import { Link } from "react-router-dom";

function BookCard({title, author, id}) {
    
    return (
                
            
            <div className="card" >
                <Link to={`/books/${id}`}>
                    <img className="book-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Closed_Book_Icon.svg/1200px-Closed_Book_Icon.svg.png" alt="book-icon" />
                        <div className="text-card">
                        <p>{author}</p>
                        <h2>{title}</h2>  
                    </div>
                </Link>              
            </div>        
        
    )
}

export default BookCard
