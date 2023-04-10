import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experrience from './components/Experience/Experience'
import Sertificate from './components/Sertificate/Sertificate'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experrience/>
        <Sertificate/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App