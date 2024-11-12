import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Snackbar from './components/Snackbar'
import { useState } from 'react'
const App = () => {
  const [snackbar, setSnackbar] = useState({
    message: '',
    type: '',
    isVisible: false,
  });

  const displaySnackbar = (message, type) => {
    setSnackbar({
      message,
      type,
      isVisible: true,
    });
    setTimeout(() => {
      setSnackbar((prevState) => ({ ...prevState, isVisible: false }));
    }, 3000);
  };
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Contact showSnackbar={displaySnackbar}/>
      <Footer/>
       {snackbar.isVisible && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar((prevState) => ({ ...prevState, isVisible: false }))}
        />
      )}
    </div>
  )
}

export default App