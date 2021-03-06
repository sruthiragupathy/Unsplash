import React from "react";
import './Card.css'


const Card = ({item,setOpen,setError,open,setPictureid,bright,setBright}) =>{
    // console.log(setOpen,setError,open);
    
   function handleDelete(e){
       e.preventDefault();
       setOpen(!open)
       setPictureid(item._id)
     setBright(!bright)
       console.log(item._id)

   }
   

    return (
        <div className="container">
            <img src={item.URL} alt={item.title} className="image"/>
            <div className="overlay">{item.title}</div>

            <button className="delete" onClick={handleDelete}>Delete</button>
            
        </div>
    )
}

export default Card;