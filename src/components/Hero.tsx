import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Trusted Technology Platform</span>
          <h1>Welcome to Lindroid Zimbabwe</h1>
          <p>
            Lindroid Zimbawe is a technology-driven company with expertise in bridging gaps between rural communities
            and service providers. We act as catalytic mediator, empowering individuals and communities to achieve
            success through innovative solutions.
          </p>
          <div className="hero-actions">
            <a href="#services" className="cta-btn primary">
              Explore Services
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