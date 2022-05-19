import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';


function App() {

  let navigate = useNavigate();
  let [clicked, setClicked] = useState(0);
  let [eng, setEng] = useState(true)

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
  const liname = ['Home', 'About', 'Project', 'Contact']
  const menu = [
    '/', '/about', '/portfolio', '/contact'
  ]

  useEffect(() => {
    navigate('/')
  }, [])
  return (
    <div className="App">

      <ul className='util'>
        <li onClick={() => setEng(true)}>ENG</li>
        <li onClick={() => setEng(false)}>KOR</li>
      </ul>
      <nav>
        <ul className='gnb'>

          {
            menuArr.map((a, index) => {
              return (
                <li key={index}
                  className={clicked === index ? "btn_color" : ""}
                  onClick={() => {
                    selectMenuHandler(index);
                    navigate(menu[index]);
                  }}
                >
                  {menuico[index]}
                  <div className='action'>{liname[index]}</div>
                </li>

              )
            })
          }


        </ul>
      </nav>


      <Routes >
        <Route path="/" element={<Home eng={eng} setEng={setEng} />} />
        <Route path="/about" element={<About eng={eng} setEng={setEng} />} />
        <Route path="/portfolio" element={<Portfolio eng={eng} setEng={setEng} />} />
        <Route path="/contact" element={<Contact eng={eng} setEng={setEng} />} />

      </Routes>

    </div >
  );
}

export default App;
