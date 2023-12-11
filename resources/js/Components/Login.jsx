import React from 'react';

const Login = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-cover">
        {/* Reemplaza 'imagen.png' con la ruta de tu imagen */}
        <img src="https://deviaxdey.com/images/fondo.webp" alt="Imagen de fondo" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex items-center justify-center p-8 mt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          {/* Aquí irá tu formulario de login */}
          {/* Por ejemplo: */}
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;