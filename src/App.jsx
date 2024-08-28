import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/high-level/Navbar';
import { Footer } from './components/high-level/Footer';
import { Home } from './components/home/Home';
import { AboutUs } from './components/about-us/AboutUs';
import { Contact } from './components/contact/Contact';
import { Main } from './components/store/Main';
import { ProductDetail } from './components/store/ProductDetail';
import { LoginForm } from './components/login/MainForm';

function App() {

  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> 
           <Route path="login" element={<LoginForm />}/>
           <Route path="register" />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/store" element={< Main />}/>
          <Route path='/store/product/:id' element={<ProductDetail />} />
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
