import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SATYA TEGAR KUSUMA</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Satya Kusuma. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer