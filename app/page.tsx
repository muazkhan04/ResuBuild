export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            ResumeShift
          </div>
          <nav className="nav-links">
            <a href="#how-it-works" className="nav-item">How it works</a>
            <a href="#features" className="nav-item">Features</a>
            <button className="btn btn-secondary">Sign IN</button>
            <button className="btn btn-primary">Get Started</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container fade-in">
            <h1>Land Your Dream Job with an <span className="highlight-text">AI-Tailored Resume</span></h1>
            <p className="delay-1">
              Stop sending generic applications. ResumeShift dynamically adjusts your experiences, skills, and cover letter for every single job posting.
            </p>
            <div className="hero-actions delay-2">
              <button className="btn btn-primary btn-large">Start Perfecting Your Resume</button>
              <button className="btn btn-secondary btn-large">View Demo</button>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="container fade-in delay-1">
            <h2 className="section-title">How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Build Your Master Profile</h3>
                <p>Add all your past job experiences, skills, projects, and certifications into a single comprehensive database.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Input Job Description</h3>
                <p>Found a job you want? Simply paste the job description and title into our platform.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Get Tailored Documents</h3>
                <p>Our AI intelligently selects and rewrites your experiences and generates a targeted cover letter for this specific role.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container fade-in delay-2">
            <div className="features-grid">
              <div className="feature-text">
                <h2 className="section-title" style={{textAlign: "left", marginBottom: "24px"}}>Precision Matching</h2>
                <div className="feature-item">
                  <h3>Highlights Relevant Experience</h3>
                  <p>ResumeShift ranks your past roles and selects the most relevant ones. If you apply for a Manager role, your leadership tasks are put front and center.</p>
                </div>
                <div className="feature-item" style={{marginTop: "24px"}}>
                  <h3>Analyzes Key Terminology</h3>
                  <p>ATS systems look for specific keywords. We adapt your wording to use the exact terminology from the employer's posting.</p>
                </div>
                <div className="feature-item" style={{marginTop: "24px"}}>
                  <h3>Custom Cover Letters</h3>
                  <p>Say goodbye to boilerplate cover letters. We write a unique intro and letter that bridges your background to their needs.</p>
                </div>
              </div>
              <div className="feature-image">
                <div className="mockup-window">
                  <div className="mockup-header">
                    <span className="dot" style={{backgroundColor: '#ff5f56'}}></span>
                    <span className="dot" style={{backgroundColor: '#ffbd2e'}}></span>
                    <span className="dot" style={{backgroundColor: '#27c93f'}}></span>
                  </div>
                  <div className="mockup-body">
                    <div className="mockup-line title"></div>
                    <div className="mockup-line"></div>
                    <div className="mockup-line short"></div>
                    <div className="mockup-box">
                      <div className="mockup-inner-line"></div>
                      <div className="mockup-inner-line short"></div>
                    </div>
                    <div className="mockup-box selected">
                      <div className="mockup-inner-line highlight"></div>
                      <div className="mockup-inner-line short highlight"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container fade-in delay-3">
            <h2>Ready to shift your career into gear?</h2>
            <p>Join thousands of job seekers landing interviews through tailored resumes.</p>
            <button className="btn btn-large cta-btn">Create Your Free Profile</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 ResumeShift. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
