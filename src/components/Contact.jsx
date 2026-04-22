function Contact() {
  const links = [
    {
      icon: '✉',
      label: 'Email',
      value: 'daspriyanshu57@email.com',
      href: 'mailto:daspriyanshu57@email.com',
    },
    {
      icon: '⌥',
      label: 'GitHub',
      value: 'github.com/the-priyanshu-das',
      href: 'https://github.com/the-priyanshu-das',
    },
    {
      icon: '◈',
      label: 'LinkedIn',
      value: 'linkedin.com/in/priyanshudas003',
      href: 'https://www.linkedin.com/in/priyanshudas003/',
    },
    {
      icon: '◉',
      label: 'Phone',
      value: '+91 7987633278',
      href: 'tel:+917987633278',
    },
  ];
 
  return (
    <section className="section" id="contact">
      <div className="section__header">
        <span className="section__number">03 //</span>
        <h2 className="section__title">Contact</h2>
        <div className="section__line"></div>
      </div>
 
      <div className="contact__wrapper">
        <div>
          <h3 className="contact__headline">
            Let's build<br />
            something <span>great.</span>
          </h3>
          <p className="contact__blurb">
            I'm always open to new opportunities, collaborations, or just
            a good conversation about tech and ideas. Drop me a message
            and I'll get back to you.
          </p>
        </div>
 
        <div className="contact__links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact__link-icon">{link.icon}</span>
              <div className="contact__link-content">
                <span className="contact__link-label">{link.label}</span>
                <span className="contact__link-value">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
 
export default Contact;