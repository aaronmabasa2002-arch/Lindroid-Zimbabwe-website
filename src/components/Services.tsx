
import './Services.css';

function Services() {
  const services = [
    { title: 'Mathematics Fundamentals', description: 'Build a strong foundation in math.', price: '$99' },
    { title: 'Science Exploration', description: 'Discover the wonders of science.', price: '$89' },
    { title: 'Language Arts', description: 'Enhance your reading and writing skills.', price: '$79' },
    { title: 'History and Culture', description: 'Learn about the past and its impact.', price: '$95' },
    { title: 'Network Mediation', description: 'Facilitate effective communication and conflict resolution in professional networks.', price: '$149' },
    { title: 'PrimeYieldFinance', description: 'Optimize financial yields through expert investment and portfolio management.', price: '$199' },
    { title: 'Employment Creation', description: 'Develop and implement strategies for sustainable job creation and workforce development.', price: '$299' },
    { title: 'Talent Activation', description: 'Unlock and activate potential talent through targeted training and development programs.', price: '$179' },
    { title: 'ICT Kit Installation', description: 'Professional installation and setup of Information and Communication Technology solutions.', price: '$249' },
    { title: 'Education Amelioration', description: 'Enhance educational systems and outcomes through innovative improvement strategies.', price: '$349' },
    { title: 'Health Care Assurance', description: 'Provide comprehensive health care assurance and risk management solutions.', price: '$399' },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="price">{service.price}</span>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
