import React,{useState,useEffect} from "react";
import { createPicture } from "../helper/apicall";
import "./Navbar.css"


const NavBar = () =>{
    const [open,setOpen] = useState(false)
    const [picture,setPicture] = useState({
        title:"",
        URL:""
    })
    const [error,setError] = useState("");
    
    function openModal(e){
        e.preventDefault();
        console.log("open")
        setOpen(!open);
    }
    
    //onSubmit handler
    const onSubmit = (e) =>{
        console.log(JSON.stringify(picture))
        e.preventDefault();
        if(picture.title==""){
            setError("Title");
            return;
        }
        else if(picture.URL==""){
            setError("URL");
            return;
        }
        createPicture(picture).then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log(data)
            }
        })
        setOpen(!open);
        console.log(open);
        

    }

    const changeHandler=(e)=>{
        setPicture({...picture,[e.target.name]:e.target.value});
        console.log(e.target.name,e.target.value);

    }


    function Modal(){
        return <div className="form">
                <h3>Add a new photo</h3>
                {error&&<p className="error">{error} field is empty</p>}
                <form>
                    <label htmlFor="label">Label</label>
                    {/* <p>Label</p> */}
                    <input onChange = {changeHandler} name="title" className="form-input" placeholder="City Buildings Under Cloudy Sky"></input>
                    <label htmlFor="URL">URL</label>
                    <input onChange = {changeHandler} name="URL"  className="form-input" placeholder="https://images.pexels.com/photos/358502/pexels-photo-358502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ></input>
                    <div className="btns">
                    <button className="btn" onClick={openModal}>
                        Cancel
                    </button>
                    <button className="btn green-btn" onClick={onSubmit}>
                        Submit
                    </button>
                </div>
                </form>
                
                
                
                </div>
        
    }
    return (
        <div className="nav-div">
        <nav className="nav">
            <div className="nav left">
            <h4>My Unsplash</h4>
            <input className="search" placeholder="Search" type="text"/>
            </div>
            <button className="btn green-btn " onClick={openModal}>Add a Photo</button>
            
        </nav>
        {open&&Modal()}
        
        </div>
    )
}

export default NavBar;