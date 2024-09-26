import React from 'react'
import './intro.css'
import girl from '../../assets/profileimg1.png'
import pattern from '../../assets/pattern2.png'
import pro from '../../assets/programmer.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introcontent">
          <span className='hello'>Hello,</span>
          <span className='introtext'>I'm <span className="introName">Shreyas Jagtap</span><br />Full Stack Java Developer</span>
        <p className='introPara'>Highly motivated and detail-oriented full stack Java developer with a strong foundation in <br />computer science.Proficient in designing, developing, and deploying scalable and efficient <br /> applications.</p>
        <button className='hire-btn'>
          <img className='hire-img' src={pro} alt="" />Hire Me
        </button>
      </div>
      <span className="img-box">
        <img src={pattern} className='back-img' alt="pattern" />
        <img src={girl} className='main-img' alt="profimg" />
      </span>
    </section>
  )
}

export default Intro