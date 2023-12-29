import { useEffect } from "react";
import { DeleteButton } from "./DeleteButton";

export const SubStaff = ({ children }) => {
    return (
        <ul>
            {Object.values(children).map((persona, index) => (
                <li key={index}>
                    Nombre: {persona.nombre}
                    <p>
                        {
                        persona.cargo === "directiva"
                            ? persona.categoria
                            : persona.grado && persona.seccion
                              ? persona.grado + " " +persona.seccion
                              : null
                        }
                    </p>
                    {/* <img src="../../../perfiles/directiva/1.webp" alt="" />
                    <img src={`../../../perfiles/${persona.rutaImagen}`} alt="" /> */}
                    <p>{`../../../perfiles/${persona.rutaImagen}`}</p>
                    <DeleteButton index={persona.id}/>
                </li>
            ))}
        </ul>
    );
};
