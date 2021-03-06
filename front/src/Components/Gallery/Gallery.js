import React,{useState,useEffect} from "react";
import Card from "../Card/Card";
import { deletePictures, getPictures } from "../helper/apicall";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Gallery.css"
import '../Navbar/Navbar.css';


const Gallery = ({loading,setLoading,bright,setBright}) =>{
const [data,setData] = useState([])
const [open,setOpen] = useState(false);
const [error,setError] = useState("");
const [password,setPassword] = useState("");
const [pictureid,setPictureid] = useState("");

function handlePassword(e){
    setPassword(e.target.value);
}
//Delete modal
function handleOpen(e){
    e.preventDefault();
    setOpen(!open)
    setError("")
    setBright(!bright)
}

function handleDelete(e){
    e.preventDefault();
    
    // console.log(JSON.stringify({password}))
    deletePictures(password,pictureid)
    .then(data=>{
        if(data.error){
            setError(data.error)
        }
        else{
            setOpen(!open)
            setLoading(true);
            setBright(!bright);
            
        }
    })
    // setOpen(!open)
    // setLoading(true);
    
    
}
function deleteModal(){
    return <div className="modal">
        <h3>Are you sure?</h3>
        {error&&<p className="error">{error}</p>}
        <form>
            <label htmlFor="label">Password</label>
            <input  name="title" className="form-input" type="password" onChange={handlePassword}></input> 
            <div className="btns">
                <button className="btn" onClick={handleOpen}>
                    Cancel
                </button>
                <button className="btn red-btn" onClick={handleDelete}>
                    Delete
                </button>
            </div> 
        </form>
        </div>
    // console.log("deleteModal");

}


    
    

//preLoader
function preLoad(){
    
    getPictures()
    .then(response=>{
        if(response.error){
            console.log(response.error)
        }
        else{
            
            setData(response.reverse())
            
        }
    })
}
useEffect(()=>{
    console.log("In use effect")
    data.length=0;
    
    setTimeout(preLoad,1500);
    setLoading(false);
    // setLoading(load)
    
},[loading])
if(data.length===0){
    
    console.log("data 0");
    return (<div className="loader">
            <CircularProgress color="primary"/>
        </div>)

}
return (
    <>
    <div className="gallery" >
        {/* {console.log(data.length)} */}
        {/* {open&&deleteModal()} */}

        {loading&&<div className="loader">
            <CircularProgress color="primary"/>
        </div>}

        {data.map((item,index)=>{
            return <Card key={index} item={item} setOpen={value=>setOpen(value)} setError={value=>setError(value)} open={open} setPictureid={value=>setPictureid(value)} bright={bright} setBright={value=>setBright(value)}/>
                
        })}
        {console.log(open)}
    </div>
    {open&&deleteModal()}
    </>
)
}

export default Gallery;