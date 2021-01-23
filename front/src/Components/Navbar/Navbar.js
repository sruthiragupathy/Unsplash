import React,{useState} from "react";
import "./Navbar.css"

const NavBar = () =>{
    const [open,setOpen] = useState(false)
    function openModal(){
        setOpen(!open);
    }
    function Modal(){
        return <div className="form">
                <h3>Add a new photo</h3>
                <form>
                    <label for="Label">Label</label>
                    {/* <p>Label</p> */}
                    <input className="form-input"></input>
                    <label for="URL">URL</label>
                    <input className="form-input"></input>
                </form>
                <div className="btns">
                    <button className="btn" onClick={openModal}>
                        Cancel
                    </button>
                    <button className="btn green-btn" onClick={openModal}>
                        Submit
                    </button>
                </div>
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