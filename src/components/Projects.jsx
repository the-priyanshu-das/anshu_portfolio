function Projects() {
  const projects = [
    {
      index: '01',
      name: 'Bug Tracker',
      desc: 'A full-stack application designed to manage and monitor software issues efficiently. Allows users to create, update, and track bugs across different stages — open, in-progress, and done — with real-time updates and seamless API coordination.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      featured: true,
      link: 'https://github.com/the-priyanshu-das/Bug_Tracker.git',
    },
    {
      index: '02',
      name: 'SitePulse Analyzer',
      desc: 'A full-stack website health tool that analyzes any site\'s SEO, security headers, and SSL certificate in seconds. Offers real-time insights, issue detection, and a clean dashboard with history tracking and automated scoring.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'TailwindCSS'],
      link: 'https://github.com/the-priyanshu-das/site-pulse.git',
    },
    {
      index: '03',
      name: 'Jarvis AI Assistant',
      desc: 'A desktop voice assistant (Jarvis-inspired) built with Python that auto-starts on boot. Supports wake-word detection, conversation memory, offline file search, and AI-powered responses — gracefully handling API quota limits.',
      tech: ['Python', 'Gemini API', 'Speech Recognition', 'Offline Mode'],
      link: 'https://github.com/the-priyanshu-das/Jarvis-Ai-Assistant.git',
    },

  ];
 
  return (
    <section className="section" id="projects">
      <div className="section__header">
        <span className="section__number">02 //</span>
        <h2 className="section__title">Projects</h2>
        <div className="section__line"></div>
      </div>
 
      <div className="projects__grid">
        {projects.map((project) => (
          <div
            key={project.index}
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
          >
            <p className="project__index">PROJECT_{project.index}</p>
            <h3 className="project__name">{project.name}</h3>
            <p className="project__desc">{project.desc}</p>
            <div className="project__tech-row">
              {project.tech.map((t) => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>
            {project.link && (
              <a
                className="project__link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
 
export default Projects;