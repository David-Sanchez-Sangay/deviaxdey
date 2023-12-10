export const Popup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded border border-gray-300 shadow-md">
        <h2 className="text-lg font-semibold mb-4">Agregar docente</h2>
        <input className="border p-2 mb-4" type="text" placeholder="Nombre del docente"  />
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}
