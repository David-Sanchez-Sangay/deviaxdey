import React from 'react'
import {createRoot} from 'react-dom/client'
import '../css/app.css'
import Nav from "./Components/Nav";


function Codea(){
  return(
    <>
      <div className="bg-sky-500">
        <Nav/>
      </div>
      
    </>
  );  
};

export default Codea
if(document.getElementById("application")){
    createRoot(document.getElementById("application")).render(<Codea/>)
}