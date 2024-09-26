import React from 'react'
import './about.css'
import uiux from '../../assets/ui_ux.png'
import web from '../../assets/webdesigner.png'
import java from '../../assets/java.png'


const About = () => {
    return (
        <section id='aboutContainer'>
                <span  className='title'>About Me</span>
                <div className='introduction'>
                    <p>Hello! I'm Shreyas Sanjay Jagtap, a passionate and dedicated Full Stack Java Developer with a strong foundation in Computer Science Engineering. I am recently completed my Bachelor of Technology from K.D.K College of Engineering, Nagpur, with a GPA of 7.88.</p>
                    <p>In addition to my technical skills, I am proficient in  HTML/CSS, JavaScript, React JS, Bootstrap, C#, Core Java, and SQL.</p><br />
                </div>
           
            <div className="skillbar">
                <img src={uiux} alt="" className='skillbarimage'/>
                <div className="skillBarText">
                    <h2>UI/UX Designer</h2>
                    <p>Experienced in designing user-friendly interfaces using HTML, CSS, and JavaScript. Familiar with creating responsive layouts with Bootstrap and React JS, with an understanding of UI/UX principles to enhance user experience. </p>
                </div>
            </div>
            <div className="skillbar">
                <img src={web} alt="" className='skillbarimage' />
                <div className="skillBarText">
                    <h2>Website Designer</h2>
                    <p>Proficient in designing and developing websites using HTML, CSS, and JavaScript. Skilled in creating dynamic, responsive websites with React JS and Bootstrap, with attention to both functionality and aesthetics. </p>
                </div>
            </div>
            <div className="skillbar">
                <img src={java} alt="" className='skillbarimage' />
                <div className="skillBarText">
                    <h2>Full Stack Developer</h2>
                    <p>Experienced in full-stack development with expertise in HTML/CSS, JavaScript, React JS, C#, and Core Java. Capable of handling both frontend and backend tasks, ensuring efficient and scalable web applications </p>
                </div>
            </div>
       
        </section>
    )
}

export default About 