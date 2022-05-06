import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <nav>
        <ul className='gnb'>
          <li onClick={() => {
            navigate("/");
          }}>Home</li>
          <li onClick={() => {
            navigate("/about");
          }}>About</li>
          <li onClick={() => {
            navigate("/portfolio");
          }}>Portfolio</li>
          <li onClick={() => {
            navigate("/contact");
          }}>Contact</li>
        </ul>
      </nav>




      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div>
  );
}

export default App;
