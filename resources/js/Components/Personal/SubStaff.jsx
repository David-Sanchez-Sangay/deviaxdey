import { useEffect } from "react"

export const SubStaff = ({children}) => { 
  return (
    <ul>
      {Object.values(children).map((persona, index) => (
        <li key={index}>
          Nombre: {persona.nombre} 
          <p>
            {
              persona.cargo === 'directiva'
              ?
              persona.categoria
              : 
              persona.grado + ' ' + persona.seccion
            }
            </p>
        </li>
      ))}
    </ul>
  )
}
