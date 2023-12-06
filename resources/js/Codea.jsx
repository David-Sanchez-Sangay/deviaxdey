import React from 'react'
import {createRoot} from 'react-dom/client'

const Codea = () => {
  return (
    <div>
      Prueba de react mas de 4 horas 
    </div>
  )
}

export default Codea
if(document.getElementById("application")){
    createRoot(document.getElementById("application")).render(<Codea/>)
}
