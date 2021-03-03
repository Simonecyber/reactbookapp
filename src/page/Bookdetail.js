import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '../components/button';
import {Link} from 'react-router-dom'; 

function Bookdetail ({match}) {

  useEffect(() => {
    getItems();
  }, []);

  const [item, setItem] = useState({});

  function getItems () {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${match.params.id}`).then(item => {
    console.log(item.data);
    setItem(item.data.volumeInfo);
    
    
  });

  
  //`https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?`

}
  
  return (
    <div className="App">
     
  <div className="bookdetail-wrap" >

    
    <h1>{item.title === undefined ? " Title unavailable ": `${item.title}` }</h1>

    <h2>{item.authors === undefined ? " Authors unavailable": `${item.authors}`}</h2>

    <img className="img-detail" src={item.imageLinks === undefined ? "": `${item.imageLinks.small}`} />

    <p>{item.description === undefined ? "Description unavailable" : `${item.description}`}</p>
    
    <Link to={'/'}><Button text="CLOSE" /></Link> 

    </div>
    </div>
  );
  }
  

 export default Bookdetail;