import Navbar from "../components/Navbar";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import { useState, useEffect } from "react";

const Dashboard = () => {
  // Load jobs from localStorage
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : [];
  });

  // Save jobs whenever they change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  // Theme toggle state
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? true : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Job counts for dashboard summary
  const counts = jobs.reduce(
    (acc, job) => {
      acc[job.status] = (acc[job.status] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-6xl mx-auto p-6">
        {/* Dashboard summary */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <span>Total: {jobs.length}</span>
            <span>Applied: {counts.Applied || 0}</span>
            <span>Interview: {counts.Interview || 0}</span>
            <span>Rejected: {counts.Rejected || 0}</span>
            <span>Offer: {counts.Offer || 0}</span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Job form */}
        <JobForm setJobs={setJobs} darkMode={darkMode} />

        {/* Job list */}
        <JobList jobs={jobs} setJobs={setJobs} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Dashboard;
