function About() {
  const skills = [
    'React / JSX',
    'Node.js & Express',
    'Python',
    'Cybersecurity Basics',
    'MongoDB',
    'Graphic Design',
    'REST APIs',
    'TailwindCSS',
  ];
 
  return (
    <section className="section" id="about">
      <div className="section__header">
        <span className="section__number">01 //</span>
        <h2 className="section__title">About Me</h2>
        <div className="section__line"></div>
      </div>
 
      <div className="about__grid">
        <div className="about__bio">
          <p>
            I'm a passionate student who enjoys building real-world digital
            solutions and exploring how technology works behind the scenes.
            My journey started with curiosity — understanding how websites,
            apps, and systems actually function.
          </p>
          <p>
            I have hands-on experience in{' '}
            <strong>front-end development</strong>,{' '}
            <strong>cybersecurity basics</strong>, and{' '}
            <strong>graphic design</strong>. I like creating projects that
            are not only functional but also meaningful and user-friendly.
          </p>
          <p>
            Recently, I've been focusing on improving my skills in security,
            problem-solving, and building scalable web applications. I enjoy
            learning by doing — whether it's creating a bug tracking system
            or experimenting with cybersecurity scripts.
          </p>
          <p>
            My goal is simple: to grow as a developer, build impactful
            projects, and work on ideas that actually solve problems.
          </p>
        </div>
 
        <div>
          <p className="about__skills-title">// Technologies &amp; Skills</p>
          <div className="about__skills-grid">
            {skills.map((skill) => (
              <div className="skill-chip" key={skill}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;