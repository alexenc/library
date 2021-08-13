import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewBook from "./components/AddNewBook";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Switch>
        <Route exact path="/">
          <BookList/>          
        </Route>
        <Route path="/new">
          <AddNewBook/>          
        </Route>
        <Route path="/books/:id">
          <Book/>          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
