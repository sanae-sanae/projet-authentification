import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-xl text-gray-300">hadi hiya lpage lijaya jawad had zafta mabanax ga3 xman tailwind ola bailwind </p>
        <div className="mt-8">
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-sky-500 text-white rounded-r-md hover:bg-sky-600 focus:outline-none"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;