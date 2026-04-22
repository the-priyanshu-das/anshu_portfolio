import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
 
      <hr className="full-divider" />
      <About />
 
      <hr className="full-divider" />
      <Projects />
 
      <hr className="full-divider" />
      <Contact />
 
      <footer className="footer">
        <p className="footer__copy">
          © 2025 <span>Priyanshu Das</span> — Crafted with 💖 & ☕.
        </p>
        <p className="footer__tag">// PORTFOLIO_v1.0</p>
      </footer>
    </div>
  );
}
 
export default App;