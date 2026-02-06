import image from './assets/me.jpeg'
import onlineMarket from './assets/online-market.png'
import credifama from './assets/credifama.png'
import minigames from './assets/minigames.png'
import gxc from './assets/gxc.jpg'
import tcs from './assets/tcs.jpg'
import univeristy from './assets/university.png'
import linkinIcon from './assets/linkedin-icon.webp'
import githubIcon from './assets/github-icon.webp'
import './App.css'


function ProjectCard({ project }) {
  return (
    <div className='project-card'>
      <img src={project.image} alt="test" />
      <div className='info-wrapper'>

        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className='stack-wrapper'>
          {project.stack.map(s => (
            <div className='stack'>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {

  const projects = [
    {
      name: 'Online Market',
      image: onlineMarket,
      description: 'Full-stack application that integrates backend and frontend with user authentication, product catalog and database persistance.',
      stack: ['C#', 'React', 'SQL Server']
    },
    {
      name: 'Credifama',
      image: credifama,
      description: 'Form with input validation that allows to enter user information and view a list of the users entered.',
      stack: ['PHP', 'HTML', 'CSS', 'JavasScript', 'MySQL']
    },
    {
      name: 'Minigames',
      image: minigames,
      description: 'Web application featuring multiple small interactive games using routing, reusable components, and state management.',
      stack: ['React']
    }
  ]

  return (
    <>
      <div id='banner' className='section section-odd'>
        <div className='info-container'>
          <h1>Javier Moreno</h1>
          <p style={{ fontSize: 24 }}>Software Developer</p>
          <div id='websites'>
            <img src={linkinIcon} alt="linkedin" />
            <img src={githubIcon} alt="github" />
          </div>
        </div>
        <div id='profile-pic-container'>
          <img id='profile-pic' src={image} alt="me" />
        </div>
      </div>

      <div id='about-me' className='section'>
        <h2>About me</h2>
        <p>I am a software engineering student based in Uruguay, currently in the last year of my career. I have experience working in academic and personal projects with different technologies both at frontend and backend level.</p>
      </div>

      <div className='section section-odd'>
        <h2>Personal Projects</h2>
        <div id='project-container'>
          {projects.map(p => (
            <ProjectCard project={p} />
          ))}
        </div>
      </div>

      <div className='section'>
        <h2>Contributions to Open-source</h2>
        <div className='experience-wrapper'>
          <img src={univeristy} alt="UCU" />
          <div className='experience-info'>
            <h3>OWASP Threat Dragon</h3>
            <p>I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications.</p>
          </div>
        </div>
      </div>

      <div className='section section-odd'>
        <h2>Work Experience</h2>
        <div className='experience-section'>
          <div className='experience-wrapper'>
            <img src={gxc} alt="GXC" />
            <div className='experience-info'>
              <h3>Genexus Consulting</h3>
              <p>I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications.</p>
            </div>
          </div>
          <div className='experience-wrapper'>
            <img src={tcs} alt="TCS" />
            <div className='experience-info'>
              <h3>Tata Consultancy Services</h3>
              <p>I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <h2>Education</h2>
        <div className='experience-wrapper'>
          <img src={univeristy} alt="UCU" />
          <div className='experience-info'>
            <h3>Catholic University of Uruguay</h3>
            <p>I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications. I work at GXC as a manual tester for web and mobile applications.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
