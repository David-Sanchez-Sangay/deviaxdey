import React from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import Main from './Main';

const App1 = () => {
    return (
      <React.StrictMode>
        <HashRouter>
          <Main />
        </HashRouter>
      </React.StrictMode>
      );
};

export default App1
if(document.getElementById("login")){
    createRoot(document.getElementById("login")).render(<App1/>)
}