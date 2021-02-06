import { fade } from "@material-ui/core";
import React,{useState} from "react";
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import NavBar from './Components/Navbar/Navbar';

function App() {
const [loading,setLoading] = useState(false);
const [bright,setBright] = useState(false);
  console.log("loading",loading)
if(bright){
  document.body.style.overflow="hidden"
}
else {
  document.body.style.overflow="scroll"
}

  return (
    <div className="App">
      <div className={bright?"bright fade-in":"bright fade-out"} ></div>
      <NavBar loading={loading} setLoading={value=>setLoading(value)} bright={bright}  setBright={value=>setBright(value)}/>
      <Gallery loading={loading} setLoading={value=>setLoading(value)} bright={bright} setBright={value=>setBright(value)}/>
    </div>
  );
}

export default App;
