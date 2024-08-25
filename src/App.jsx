import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/high-level/Navbar';
import { Footer } from './components/high-level/Footer';
import { Home } from './components/home/Home';
import { AboutUs } from './components/about-us/AboutUs';
import { Contact } from './components/contact/Contact';
import { Main } from './components/store/Main';

function App() {

  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/store" element={< Main />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" />
          <Route path="/cart" />
        </Routes>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
