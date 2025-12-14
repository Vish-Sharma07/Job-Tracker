const Navbar = ({ darkMode }) => {
  return (
    <nav 
      className={`shadow-sm ${
        darkMode 
          ? "bg-gray-800 border-b border-gray-700" 
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 
          className={`text-xl font-bold ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        >
          Job Application Tracker
        </h1>
        {/* You can add a dark mode toggle button or other navigation items here */}
      </div>
    </nav>
  );
};

export default Navbar;
