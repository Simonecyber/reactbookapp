import React from "react";
import {Link} from 'react-router-dom'; 
import Button from './button';

const Booklist = ({title, description, image, authors, id}) => {
    return(
        <div className="book">
    
            <h1>{title}</h1>

            <h3>{authors}</h3>
            <p>{description}</p>
            <img src={image} alt=""></img>
            
            
            
            <div><Link  to={`/${id}`} >
                <Button text="More info"/>
                </ Link ></div>
        </div>
        
        
        
    );
};



export default Booklist;