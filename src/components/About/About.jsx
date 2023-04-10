import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpg'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {FaAward} from 'react-icons/fa'
import {GiMedalSkull} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />         
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsFillJournalBookmarkFill className='about_icon'/>
              <h5>Experience</h5>
              <small>6x Asisten Dosen</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Sertificate</h5>
              <small>3 Sertificate</small>
            </article>
            
            <article className='about_card'>
              <GiMedalSkull className='about_icon'/>
              <h5>Award</h5>
              <small>4 Penghargaan</small>
            </article>
          </div>
          <p>
            Saya pernah menjadi asisten dosen 6 kali lebih selama kuliah, bahkan sampai lintas prodi. Sertifikat yang didapat ada 3, IT Essential, CCNA 1, dan Junior WebDev.
            Selain itu, saya juga sudah mendapat penghargaan sebanyak 4 kali dari bergai tingkatan.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About