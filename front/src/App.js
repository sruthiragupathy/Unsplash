import { fade } from "@material-ui/core";
import React,{useState} from "react";
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import NavBar from './Components/Navbar/Navbar';

function App() {
const [loading,setLoading] = useState(false);
const [bright,setBright] = useState(false);
  console.log("loading",loading)

  return (
    <div className="App">
      <div className={bright?"bright fade-in":"fade-out nobright"} ></div>
      <NavBar loading={loading} setLoading={value=>setLoading(value)} bright={bright}  setBright={value=>setBright(value)}/>
      <Gallery loading={loading} setLoading={value=>setLoading(value)} bright={bright} setBright={value=>setBright(value)}/>
    </div>
  );
}

export default App;
