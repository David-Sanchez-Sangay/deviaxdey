import React, { useState } from 'react';

const MesaPartes = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleValidation = () => {

    console.log('Correo validado:', email);
  };

  return (
    <div className="flex justify-center relative mt-20">
      <div className="bg-sky-300 shadow-md box-border rounded px-8 pt-6 pb-8 mb-4">
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleValidation}
        >
          Validar
        </button>
      </div>
    </div>
  );
};

export default MesaPartes;
