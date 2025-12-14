import { useState } from "react";

const JobForm = ({ setJobs, darkMode }) => { // Accept the darkMode prop
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied", // Changed default from "Select" to "Applied" for better UX
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.role) return; // Basic validation

    setJobs((prev) => [...prev, { ...formData, id: Date.now() }]);

    setFormData({ company: "", role: "", status: "Applied" });
  };

  // Define input classes using dynamic switching
  const inputClasses = `border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ${
    darkMode
      ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
      : "bg-white text-gray-900 border-gray-300 placeholder-gray-500"
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 rounded-lg shadow mb-6 ${
        // Use the prop here to control the form's background
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Company Name"
          className={inputClasses} // Apply dynamic class
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          required
        />

        <input
          type="text"
          placeholder="Job Role"
          className={inputClasses} // Apply dynamic class
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        />

        <select
          className={inputClasses} // Apply dynamic class
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
            {/* Removed "Select..." option since "Applied" is default and required status */}
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Offer">Offer</option>
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-150 ease-in-out"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
