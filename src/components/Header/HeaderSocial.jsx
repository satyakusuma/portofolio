import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https://facebook.com" target='_blank'><FaFacebook/></a>
    </div>
  )
}

export default HeaderSocial