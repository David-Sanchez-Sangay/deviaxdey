import React from 'react'
import {createRoot} from 'react-dom/client'
import Navbar from "./Components/Navbar";

const App1 = () => {
    return (
      <div>
        <Navbar/>
      </div>
      );
};

export default App1
if(document.getElementById("login")){
    createRoot(document.getElementById("login")).render(<App1/>)
}