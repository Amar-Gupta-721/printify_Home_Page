import React from 'react';

const Site_Info = () => {
  return (
    <footer className="bg-gray-100 py-6 text-sm text-center">
      <div className="container mx-auto px-4">
        <p className="flex justify-center space-x-4 my-4">
          <a href="#" className="text-gray-400 hover:text-green-500">Intellectual Property Policy</a>
          <a href="#" className="text-gray-400 hover:text-green-500">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-green-500">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-green-500">Security</a>
        </p>
        <p className="mt-4 text-gray-600">&copy; 2024 Printify, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Site_Info;
