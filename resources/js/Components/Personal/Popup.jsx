import { useEffect, useState } from "react";
import { createTeacher } from "../../api";

export const Popup = ({ onClose }) => {
    const [cargoSeleccionado, setCargoSeleccionado] = useState("")
    const [nombre, setNombre] = useState("")
    const [grado, setGrado] = useState("")
    const [seccion, setSeccion] = useState("")
    const [categoria, setCategoria] = useState("")

    const enviarDatos = () => {
        const personal = {
            nombre: nombre,
            grado: grado,
            seccion: seccion,
            cargo: cargoSeleccionado,
            categoria: categoria
        }

        if(cargoSeleccionado === 'docente') {
            personal.cargo = cargoSeleccionado + "-" + grado
        }
        
        console.log(personal)
        createTeacher(personal)
    }

    useEffect(() => {
        setGrado("")
        setSeccion("")
        setCategoria("")
    }, [cargoSeleccionado])

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded border border-gray-300 shadow-md">
                <h2 className="text-lg font-semibold mb-4">Agregar personal</h2>

                <div className="mb-4">
                    <input
                        className="border p-2"
                        type="text"
                        placeholder="Nombre del docente"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>

                <div className="mb-4">
                    <select
                        className="border p-2"
                        onChange={(e) => setCargoSeleccionado(e.target.value)}
                        value={cargoSeleccionado}
                    >
                        <option value="">Selección de cargo</option>
                        <option value="directiva">Directiva</option>
                        <option value="docente">Docente</option>
                        <option value="fisica">Educación Física</option>
                        <option value="aip">AIP</option>
                        <option value="administrativo">
                            Personal Administrativo
                        </option>
                        <option value="psicologia">Psicología</option>
                    </select>
                </div>

                {cargoSeleccionado === "directiva" && (
                    <div className="mb-4">
                        <select
                            className="border p-2"
                            onChange={(e) => setCategoria(e.target.value)}
                            value={categoria}
                        >
                            <option value="">Seleccionar categoría</option>
                            <option value="directora">Directora</option>
                            <option value="director">Director</option>
                            <option value="subdirector">Subdirector</option>
                            <option value="subirectora">Subirectora</option>
                        </select>
                    </div>
                )}

                {cargoSeleccionado === "docente" && (
                    <>
                        <div className="mb-4">
                            <select 
                                className="border p-2"
                                onChange={(e) => setGrado(e.target.value)}
                                value={grado}
                            >
                                <option value="">Seleccionar grado</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <select 
                                className="border p-2"
                                onChange={(e) => setSeccion(e.target.value)}
                                value={seccion}
                            >
                                <option value="">Seleccionar sección</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                            </select>
                        </div>
                    </>
                )}

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={enviarDatos}
                >
                    Enviar
                </button>
                <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};
