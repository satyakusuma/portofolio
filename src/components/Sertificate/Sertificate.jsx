import React from 'react'
import './sertificate.css'
import {SiCisco} from 'react-icons/si'
import {TbCertificate} from 'react-icons/tb'

const Sertificate = () => {
  return (
    <section id='sertificate'>
      <h2>Certificate of Expertise</h2>

      <div className="container sertificate_container">
        <div className="serticate_expertise">
        <h3>Sertifikat Keahlian</h3>
          <div className="sertificate_content">
            <article className='sertificate_details'>
              <SiCisco className='sertificate_details-icon'/>
              <div>
                <h4>IT Essential</h4>
                <small>Sertifikasi untuk keahlian tentang komputer, baik itu merakit, maupun memperbaiki dari CISCO</small>
              </div>
            </article>
            <article className='sertificate_details'>
              <SiCisco className='sertificate_details-icon'/>
              <div>
                <h4>CCNA 1</h4>
                <small>Sertifikasi untuk keahlian konfigurasi switch, local network, IPv4, dan IPv6 dari CISCO</small>
              </div>
            </article>
            <article className='sertificate_details'>
              <TbCertificate className='sertificate_details-icon'/>
              <div>
                <h4>Junior Web Developer</h4>
                <small>Sertifikasi untuk keahlian membuat web dengan html. bootstrap, dan PHP dari Kominfo</small>
              </div>
            </article>
          </div>
        </div>
        
        </div>
    </section>
  )
}

export default Sertificate