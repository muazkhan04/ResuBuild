export default function JobsPage() {
    return (
      <div>
        <h1>Job Tracker</h1>
        <p>Add and manage job applications here.</p>
  
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "500px" }}>
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Role Title" />
          <input type="text" placeholder="Job Link" />
          <textarea placeholder="Job Description" rows={6}></textarea>
          <button type="submit">Add Job</button>
        </form>
      </div>
    );
  }