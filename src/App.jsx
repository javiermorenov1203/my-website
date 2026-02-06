import profilePic from './assets/me.jpeg'
import marketImg from './assets/online-market.png'
import credifamaImg from './assets/credifama.png'
import minigamesImg from './assets/minigames.png'
import gxcImg from './assets/gxc.jpg'
import tcsImg from './assets/tcs.jpg'
import threatDragonImg from './assets/threat-dragon.png'
import univeristyImage from './assets/university.png'
import linkinIcon from './assets/linkedin-icon.webp'
import githubIcon from './assets/github-icon.webp'
import gmailIcon from './assets/gmail-icon.png'
import phoneIcon from './assets/phone-icon.png'
import './App.css'


function ProjectCard({ project }) {
  return (
    <a href={project.url}>
      <div className='project-card'>
        <img src={project.image} alt={project.name} />
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
    </a>
  )
}

function ExperienceLayout({ experienceInfo }) {
  return (
    <div className='experience-wrapper'>
      <img src={experienceInfo.image} alt={experienceInfo.name} />
      <div className='experience-info'>
        <h3>{experienceInfo.name}</h3>
        <p>{experienceInfo.description}</p>
      </div>
    </div>
  )
}

function App() {

  const projects = [
    {
      name: 'Online Market',
      image: marketImg,
      url: 'https://github.com/javiermorenov1203/online-market',
      description: 'Full-stack application that integrates backend and frontend with user authentication, product catalog and database persistance.',
      stack: ['C#', 'React', 'SQL Server']
    },
    {
      name: 'Credifama',
      image: credifamaImg,
      url: 'https://github.com/javiermorenov1203/credifama',
      description: 'Form with input validation that allows to enter user information and view a list of the users entered.',
      stack: ['PHP', 'HTML', 'CSS', 'JavasScript', 'MySQL']
    },
    {
      name: 'Minigames',
      image: minigamesImg,
      url: 'https://github.com/javiermorenov1203/MiniGames',
      description: 'Web application featuring multiple small interactive games using routing, reusable components, and state management.',
      stack: ['React']
    }
  ]

  const workExperience = [
    {
      name: 'Genexus Consulting',
      image: gxcImg,
      description: 'I work at GXC as a manual tester for web and mobile applications. I gained expertise in software quality standards and contributed to projects for insurance companies and financial entities.'
    },
    {
      name: 'Tata Consultancy Services',
      image: tcsImg,
      description: 'I provided customer support to Microsoft Dynamics end users. I communicated in English with international clients and analyzed issues to provide efficient solutions.'
    }
  ]

  return (
    <>
      <div id='banner' className='section section-odd'>
        <div className='info-container'>
          <h1>Javier Moreno</h1>
          <p>Software Developer</p>
          <div id='websites'>
            <a href="https://www.linkedin.com/in/javier-moreno-902aa9223/?locale=en-US">
              <img src={linkinIcon} alt="linkedin" />
            </a>
            <a href="https://github.com/javiermorenov1203">
              <img src={githubIcon} alt="github" />
            </a>
          </div>
        </div>
        <div id='profile-pic-container'>
          <img id='profile-pic' src={profilePic} alt="me" />
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
        <div className='grid-section'>
          <img src={threatDragonImg} alt='owasp' />
          <div className='grid-info'>
            <h3>OWASP Threat Dragon</h3>
            <p>I contributed to Owasp Threat Dragon as a part of a team from my university. In this project, we added a new type of diagram for modeling threats specific to Elevation of Privilege. We also made it extendable so that new categories can be added.</p>
          </div>
        </div>
      </div>

      <div className='section section-odd'>
        <h2>Work Experience</h2>
        <div className='experience-section'>
          {workExperience.map(e => (
            <ExperienceLayout experienceInfo={e} />
          ))}
        </div>
      </div>

      <div className='section'>
        <h2>Education</h2>
        <div className='grid-section mobile-grid'>
          <div className='grid-info'>
            <h3>Catholic University of Uruguay</h3>
            <p>I am currently in the last year of my software engineering carrer where I have had the opportunity to develop both technical and soft skills.</p>
          </div>
          <img src={univeristyImage} alt="UCU" />
        </div>
      </div>

      <footer className='section section-odd'>
        <h2>Contact Information</h2>
        <div className='contact'>
          <img src={gmailIcon} alt="email" />
          <p>javiermorenov1203@gmail.com</p>
        </div>
        <div className='contact'>
          <img src={phoneIcon} alt="phone" />
          <p>(+598) 096 715 450</p>
        </div>
      </footer>
    </>
  )
}

export default App
