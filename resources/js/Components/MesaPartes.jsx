import React, { useState } from 'react';

const MesaPartes = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleValidation = () => {
    // Aquí puedes agregar la lógica de validación del correo según tus necesidades
    // Por ahora, simplemente imprimiré el correo en la consola
    console.log('Correo validado:', email);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-sky-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailInput">
          Correo Electrónico:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="emailInput"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleValidation}
        >
          Validar
        </button>
      </div>
    </div>
  );
};

export default MesaPartes;
