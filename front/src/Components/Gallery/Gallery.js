import React,{useState,useEffect} from "react";
import { getPictures } from "../helper/apicall";
import "./Gallery.css"


const Gallery = () =>{
const [data,setData] = useState([])
function preLoad(){
    getPictures()
    .then(response=>{
        if(response.error){
            console.log(response.error)
        }
        else{
            
            setData(response)
            console.log(data)
        }
    })
}
useEffect(()=>{
    preLoad();
},[])
return (
    <div className="gallery">
        {data.map((item,index)=>{
            return <p key={index}>{item.title}</p>
        })}
    </div>
)
}

export default Gallery;