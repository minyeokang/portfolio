import './App.css';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react';


function App() {

  let navigate = useNavigate();
  let [clicked, setClicked] = useState(0)

  const menuArr = [
    { name: '' },
    { name: '' },
    { name: '' },
    { name: '' }
  ]
  const menuico = [
    <FontAwesomeIcon icon="fa-solid fa-house" />,
    <FontAwesomeIcon icon="fa-solid fa-user" />,
    <FontAwesomeIcon icon="fa-solid fa-briefcase" />,
    <FontAwesomeIcon icon="fa-solid fa-comment" />
  ]
  const selectMenuHandler = (index) => {
    setClicked(index);
  }
  const menu = [
    '/', '/about', '/portfolio', '/contact'
  ]
  return (
    <div className="App">
      <nav>
        <ul className='gnb'>

          {
            menuArr.map((a, index) => {
              return (
                <li
                  className={clicked === index ? "btn_color" : ""}
                  onClick={() => {
                    selectMenuHandler(index);
                    navigate(menu[index]);
                  }}
                >
                  {menuico[index]}
                </li>

              )
            })
          }


        </ul>
      </nav>


      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </div >
  );
}

export default App;
