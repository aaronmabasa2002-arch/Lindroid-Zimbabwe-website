import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Trusted Learning Platform</span>
          <h1>Welcome to Lindroid Zimbabwe</h1>
          <p>
            We deliver quality education that builds strong academic results,
            practical skills, and confidence for lifelong success.
          </p>
          <div className="hero-actions">
            <a href="#courses" className="cta-btn primary">
              Explore Courses
            </a>
            <a href="#contact" className="cta-btn secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;