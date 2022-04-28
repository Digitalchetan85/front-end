import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import TopMenubar from './components/Includes/TopMenubar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Includes/Footer';
import ResidentialProjects from './components/Projects/ResidentialProjects';
import CommercialProjects from './components/Projects/CommercialProjects';
import Gallery from './components/Gallery';
import Careers from './components/Careers';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <TopMenubar />
      <Routes>
        <Route path="/yellow-walls" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/projects/residential" index element={<ResidentialProjects />} />
        <Route path="/projects/commercial" index element={<CommercialProjects />} />
        <Route path="/gallery" index element={<Gallery />} />
        <Route path="/careers" index element={<Careers />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
