import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Container avec bordure animée */}
      <div className="relative w-96 h-[420px] bg-gray-800 rounded-lg overflow-hidden p-8 
        before:absolute before:-top-1/2 before:-left-1/2 before:w-full before:h-full 
        before:bg-gradient-to-r before:from-transparent before:via-sky-400 before:to-transparent 
        before:animate-spin-slow before:z-0">
        
        {/* Contenu du formulaire */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-sky-400 mb-8 text-center">Sign in</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none 
                  focus:ring-2 focus:ring-sky-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none 
                  focus:ring-2 focus:ring-sky-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400">
              <a href="#" className="hover:text-sky-400">Forgot Password?</a>
              <a href="/register" className="hover:text-sky-400">Sign up</a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 
                transition duration-300"
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