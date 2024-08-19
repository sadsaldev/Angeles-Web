import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/high-level/Navbar';
import { Footer } from './components/high-level/Footer';
import { Home } from './components/home/Home';

function App() {

  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-us" />
          <Route path="/store" />
          <Route path="/contact" />
          <Route path="/profile" />
          <Route path="/cart" />
        </Routes>
        <Footer />
       </Router>
    </div>
  );
}

export default App;
