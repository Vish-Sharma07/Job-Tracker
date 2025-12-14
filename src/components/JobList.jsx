import { useState } from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, setJobs, darkMode }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mt-6">
      {/* Search & Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by company or role..."
          className={`flex-1 border rounded px-3 py-2 ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900"}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className={`border rounded px-3 py-2 ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900"}`}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>
      </div>

      {/* Job cards */}
      <div className="grid gap-4">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">No jobs found 😢</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} setJobs={setJobs} darkMode={darkMode} />
          ))
        )}
      </div>
    </div>
  );
};

export default JobList;
