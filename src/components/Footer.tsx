import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Lindroid Zimbabwe</h3>
          <p>
            Building strong academic foundations with practical skills for lifelong
            success.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Phone: 0780022890</p>
          <p>
            Email:{' '}
            <a href="mailto:lindroidzimbabwe@gmail.com">
              lindroidzimbabwe@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Lindroid Zimbabwe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
