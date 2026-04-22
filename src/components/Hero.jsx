function Hero() {
  return (
    <section className="hero" id="hero">
      <p className="hero__eyebrow">Priyanshu Das — Portfolio </p>
 
      <h1 className="hero__title">
        Software
        <span className="hero__title-accent">Engineer.</span>
      </h1>
 
      <p className="hero__subtitle">
        Building real-world digital solutions at the intersection of
        security, design, and scalable web engineering.
      </p>
 
      <div className="hero__tags">
        <span className="hero__tag">Front-End Dev</span>
        <span className="hero__tag">Cybersecurity</span>
        <span className="hero__tag">Graphic Design</span>
        <span className="hero__tag">Python</span>
      </div>
 
      <div className="hero__cta-row">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </div>
 
      <div className="hero__scroll-hint">Scroll</div>
    </section>
  );
}
 
export default Hero;
 