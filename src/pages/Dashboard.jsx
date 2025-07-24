import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Preloader */}
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50 hidden">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-blue-600 fixed top-0 left-0 right-0 shadow z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-white font-bold text-xl">Hospital</div>
            <div className="flex items-center space-x-4">
              <div className="text-white cursor-pointer">
                <i className="fa fa-user"></i> <span>User</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4">
        <h1 className="text-2xl font-semibold text-gray-700">Welcome to the Dashboard</h1>
        {/* Add your dashboard widgets or content here */}
      </div>
    </div>
  );
};

export default Dashboard;
