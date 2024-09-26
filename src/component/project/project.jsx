import React from 'react'
import './project.css'

const Project = () => {
  return (
      <section id="projects">
          <h2>Projects</h2>

          <div class="project-container">
              <div class="project">
                  <h3>1Trainee.com</h3>
                  <p>Developed an industrial web application for traineeship management using ASP.NET MVC5.</p>
                  <p><strong>Technologies Used:</strong> ASP.NET MVC5, C#, SQL Server, HTML, CSS, Bootstrap</p>
                  <p><strong>Key Features:</strong> Integrated trainee application system, Role-based access control, Automated email notifications</p>
                  <a href="https://www.1trainee.com/" target="_blank">View on Live</a>
              </div>

              <div class="project">
                  <h3>Pharmacy Fraud Detection using Blockchain</h3>
                  <p>Built a system to detect counterfeit drugs using blockchain technology and QR codes.</p>
                  <p><strong>Technologies Used:</strong> Core Java, Blockchain, QR Code Scanner</p>
                  <p><strong>Key Features:</strong> QR code-based drug verification, Immutable blockchain ledger</p>
                  <a href="https://github.com/Shreyas9890?tab=repositories" target="_blank">View on GitHub</a>
              </div>

              <div class="project">
                  <h3>Todo List by using HTML, CSS, and JavaScript</h3>
                  <p>A simple Todo List app that allows users to create, edit, and delete Todo items. Built with HTML5, CSS3, and JavaScript. Stores data locally using local storage.</p>
                  <p><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript</p>
                  <a href="https://github.com/Shreyas9890/Todo-List-by-using-HTML-CSS-and-JAVA-SCRIPT" target="_blank">View on GitHub</a>
              </div>

           
              <div class="project">
                  <h3>JavaScript Time Bomb Project</h3>
                  <p>A JavaScript project that simulates a time bomb countdown. When the time hits zero, the application triggers an explosion animation.</p>
                  <p><strong>Technologies Used:</strong> JavaScript, HTML5, CSS3</p>
                  <a href="https://github.com/Shreyas9890/JavaScript_TimeBomb_Project" target="_blank">View on GitHub</a>
              </div>
          </div>
      </section>



  )
}

export default Project