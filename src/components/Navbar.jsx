import '../index.css';
 
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">
        Priyanshu<span> .</span>
      </a>
 
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
 
      <div className="navbar__status">
        <span className="navbar__status-dot"></span>
        Available for work
      </div>
    </nav>
  );
}
 
export default Navbar;
 