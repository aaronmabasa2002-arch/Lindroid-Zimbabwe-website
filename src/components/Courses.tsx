
import './Courses.css';

function Courses() {
  const courses = [
    { title: 'Mathematics Fundamentals', description: 'Build a strong foundation in math.', price: '$99' },
    { title: 'Science Exploration', description: 'Discover the wonders of science.', price: '$89' },
    { title: 'Language Arts', description: 'Enhance your reading and writing skills.', price: '$79' },
    { title: 'History and Culture', description: 'Learn about the past and its impact.', price: '$95' },
  ];

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <h2>Our Courses</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <span className="price">{course.price}</span>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
