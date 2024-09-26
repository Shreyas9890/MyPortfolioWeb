import React from 'react'
import './skills.css'
import java1 from '../../assets/java1.jpeg'
import reactimg from '../../assets/reactimg.png'
import sql from '../../assets/sql.png'
import tech from '../../assets/tech.png'
const Skills = () => {
  return (
      <section id="skills">
          <h2>Skills</h2>
          <div class="skills-container">
          
              <div class="skill">
                      <h3>Programming Languages</h3>
                      <ul>
                          <li>Java</li>
                          <li>JavaScript</li>
                          <li>HTML5</li>
                          <li>CSS3</li>
                          <li>C</li>
                          <li>C#</li>
                      </ul>
                
              </div>
          
              <div class="skill">
                  <img src={reactimg} alt="React JS" class="skill-icon"/>
                      <h3>Frameworks & Libraries</h3>
                      <ul>
                          <li>React JS</li>
                          <li>Bootstrap</li>
                          <li>ASP.NET MVC5</li>
                          <li>Spring Boot</li>
                      </ul>
              </div>
            
              <div class="skill">
                  <img src={sql} alt="SQL" class="skill-icon"/>
                      <h3>Databases</h3>
                      <ul>
                          <li>SQL Server</li>
                          <li>MySQL</li>
                         
                      </ul>
              </div>
         
              <div class="skill">
                  <img src={tech} alt="Tools & Technologies" class="skill-icon"/>
                      <h3>Tools & Technologies</h3>
                      <ul>
                          <li>Git</li>
                        
                          <li>AWS</li>
                      </ul>
              </div>
          </div>
      </section>

  )
}

export default Skills