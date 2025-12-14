const JobCard = ({ job, setJobs, darkMode }) => {
  const handleDelete = () => {
    setJobs((prev) => prev.filter((j) => j.id !== job.id));
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setJobs((prev) =>
      prev.map((j) => (j.id === job.id ? { ...j, status: newStatus } : j))
    );
  };

  const statusColors = {
    Applied: "bg-blue-200 text-blue-800",
    Interview: "bg-yellow-200 text-yellow-800",
    Rejected: "bg-red-200 text-red-800",
    Offer: "bg-green-200 text-green-800",
  };

  return (
    <div className={`p-4 rounded shadow flex justify-between items-center ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
    }`}>
      <div>
        <h3 className="font-semibold">{job.role}</h3>
        <p className="text-sm text-gray-500">{job.company}</p>
        <select
          className={`border rounded p-1 mt-2 ${statusColors[job.status] || "bg-gray-200 text-gray-800"}`}
          value={job.status}
          onChange={handleStatusChange}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Rejected">Rejected</option>
          <option value="Offer">Offer</option>
        </select>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default JobCard;
