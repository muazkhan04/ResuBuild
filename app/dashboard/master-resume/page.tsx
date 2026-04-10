export default function MasterResumePage() {
    return (
      <div>
        <h1>Master Resume</h1>
        <p>Store your main resume information here.</p>
  
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "600px" }}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Professional Summary" rows={5}></textarea>
          <textarea placeholder="Skills" rows={4}></textarea>
          <button type="submit">Save Resume Info</button>
        </form>
      </div>
    );
  }