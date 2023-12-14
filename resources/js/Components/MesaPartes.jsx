import React, { useState } from 'react';

const Nosotros = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [enteredCode, setEnteredCode] = useState ('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const verifyCode = () => {
    setIsCodeValid(code === enteredCode);
  };

  const generateCode = () => {
    const generatedCode = Math.floor(10000000 + Math.random() * 90000000);
    console.log('Código generado:', generatedCode);
    setCode(generatedCode.toString());
    setShowPopup(true);
    setAttempts(0); 
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (newEmail === '') {
      setIsEmailValid(false);
      setEmailErrorMessage('');
    } else {
      const isValid = newEmail.endsWith('@gmail.com');
      setIsEmailValid(isValid);

      if (!isValid) {
        setEmailErrorMessage('Ingrese un correo válido de Gmail.');
      } else {
        setEmailErrorMessage('');
      }
    }
  };

  const handleCodeChange = (e) => {
    const newEnteredCode = e.target.value;
    setEnteredCode(newEnteredCode);
    setIsCodeValid(newEnteredCode === code);
  };

  const redirectToL = () => {
    if (enteredCode && isCodeValid) {
      window.location.href = 'https://www.youtube.com';
      closePopup();
      setAttempts(0); 
    } else {
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (attempts + 1 >= maxAttempts) {
        closePopup();
        setAttempts(0); 
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setCode('');
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Nosotros</h1>
      <label htmlFor="email" className="block mb-2">Ingrese su correo:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className="border p-2 mb-4"
      />

      {emailErrorMessage && (
        <p className="text-red-500">{emailErrorMessage}</p>
      )}

      {attempts >= maxAttempts && (
        <p className="text-red-500">Ha alcanzado el límite de intentos. El formulario se cerrará.</p>
      )}

      <button
        disabled={!isEmailValid || attempts >= maxAttempts}
        onClick={generateCode}
        className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
      >
        Generar Código
      </button>

      {showPopup && (
        <div className="popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="bg-white p-8 rounded shadow-md">
              <label htmlFor="code" className="block mb-2">Verifique el codigo enviado a su correo :</label>
              <input
                type="number"
                id="code"
                value={enteredCode}
                onChange={handleCodeChange}
                className="border p-2 mb-4"/>
              <button
                disabled={!isCodeValid}
                onClick={redirectToL}
                className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer mr-2">
                Verificar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Nosotros;
