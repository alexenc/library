import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><h1 >Ti&m</h1></Link>
            <div className="links">                
                <Link to="/new">Add a new book</Link>
            </div>
        </nav>
    )
}

export default Navbar
