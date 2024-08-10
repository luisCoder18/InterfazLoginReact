import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 shadow-lg rounded-2xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-white animate-pulse">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-300">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-300">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-gray-900 bg-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="flex justify-between text-sm text-gray-400">
          <a href="#" className="hover:underline transition duration-300 ease-in-out">¿Olvidaste tu contraseña?</a>
          <a href="#" className="hover:underline transition duration-300 ease-in-out">Registrarse</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
