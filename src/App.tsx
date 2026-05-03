import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App()
{
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
export default App