import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Freelance / Contract</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on professional video editing projects including YouTube content, promotional videos, and social media content. Focused on storytelling, motion graphics, and high-quality post-production workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Server Management & Development</h4>
                <h5>Freelance / Contract</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managing Linux servers, deploying web applications, configuring databases, and handling backend development tasks. Experienced with cloud deployment, system monitoring, and performance optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack SaaS Developer</h4>
                <h5>Freelance / Contract</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing scalable SaaS platforms, CRM systems, and AI-powered dashboards. Working on backend architecture, API integrations, and automation systems for modern web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
