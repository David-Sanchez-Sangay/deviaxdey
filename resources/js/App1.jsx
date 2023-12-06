import React from 'react'
import {createRoot} from 'react-dom/client'

const App1 = () => {
    return (
        <div>
          <h1>Ingrese su correo</h1>
          
          <form action="https://www.google.com" method="GET">
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" id="correo" name="correo" required />
            <button type="submit">Verificacion</button>
          </form>
          <h1>Cuidado hombres trabajando xd</h1>
        </div>
      );
};

export default App1
if(document.getElementById("login")){
    createRoot(document.getElementById("login")).render(<App1/>)
}