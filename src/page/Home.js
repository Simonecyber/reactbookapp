import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Booklist from '../components/booklist';


function Home () {

 

 
 
 const [books, setBooks] = useState([]);
 const [search, setSearch] = useState("");
 const [query, setQuery] = useState("ReacJs");

useEffect(() =>{getBooks();},[query]);



function getBooks () {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}`).then(data => {
  //console.log(data.data.items);
  setBooks(data.data.items);
  
});

}
 

const updateSearch = (e) =>{
  setSearch(e.target.value);
  //console.log(search);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}
  
  return (
    
      <div className="App">
      
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} placeholder="Find Your Book" onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
   

     <div className="books">
{books.map(book => (
        <Booklist 
        key={book.id}
        title={book.volumeInfo.title} 
        authors={book.volumeInfo.authors === undefined ? "": `${book.volumeInfo.authors.join(' ')}`}
        description={book.volumeInfo.description} 
        image={book.volumeInfo.imageLinks === undefined ? "": `${book.volumeInfo.imageLinks.thumbnail}`}
        id={book.id}
         />

        
         
))}

<span className="credits"><h2>Developed By Simone Franceschetti</h2></span>
</div>

</div>
  );
  };


export default Home;