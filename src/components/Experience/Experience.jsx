import React from 'react'
import './experience.css'
import {ImHtmlFive} from 'react-icons/im'
import {SiCss3} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <ImHtmlFive className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience_details'>
              <SiCss3 className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience_details'>
              <BsBootstrapFill className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience_details'>
              <IoLogoJavascript className='experience_details-icon'/>
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience_details'>
              <FaReact className='experience_details-icon'/>
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END of Frontend */}
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <SiPhp className='experience_details-icon'/>
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className='experience_details'>
              <GrMysql className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience