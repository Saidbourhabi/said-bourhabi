import { Route, Routes } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';
import Library from './pages/library/library';
import Prompts from './pages/prompts/prompts';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/library" element={<Library />} />
      <Route path="/prompts" element={<Prompts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
