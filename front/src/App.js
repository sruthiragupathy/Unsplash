import React,{useState} from "react";
import './App.css';
import Gallery from './Components/Gallery/Gallery';
import NavBar from './Components/Navbar/Navbar';

function App() {
const [loading,setLoading] = useState(false)
  console.log("loading",loading)
  return (
    <div className="App">
      <NavBar loading={loading} setLoading={value=>setLoading(value)}/>
      <Gallery loading={loading} setLoading={value=>setLoading(value)}/>
    </div>
  );
}

export default App;
