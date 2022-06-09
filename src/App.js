import React from "react"
import Intro from './components/Intro/Intro';
import Nav from './components/Navbar/Nav.jsx';
import Experience from './components/experience/Experience';
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';
import {themeContext} from "./Context";
import {useContext} from 'react';
import './App.css';

function App() {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>

    <div className="App"
      style={{
      background: darkMode? 'black': '',
      color: darkMode? 'white': ''
    }}>

    <Intro/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
