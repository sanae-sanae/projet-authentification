import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    // had xi lidart hnaya howa l annimation dyal lborder rah mabghatx tkhdam ajawad rah andrab jdha hta tir
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      {/* Container avec bordure animée */} 
      <div className="relative w-96 h-[480px] bg-gray-800 rounded-lg overflow-hidden p-8 
        before:absolute before:-top-1/2 before:-left-1/2 before:w-full before:h-full 
        before:bg-gradient-to-r before:from-transparent before:via-sky-400 before:to-transparent 
        before:animate-spin-slow before:z-0">
        
        {/* Contenu du formulaire */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-sky-400 mb-8 text-center">Sign up</h2>
          
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
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none 
                  focus:ring-2 focus:ring-sky-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <button
              type="submit"
              className="w-full py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 
                transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;