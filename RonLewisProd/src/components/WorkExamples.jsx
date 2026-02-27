import { useState } from 'react'

import img1 from '../assets/1200x627-Q80_ebd427c19b173b43d78e9338da10b84c.jpg'
import img2 from '../assets/therealmurdersofatlanta-s2-keyart-logo-show-tile-1920x1080.avif'
import img3 from '../assets/1715042061815.jpg'
import img4 from '../assets/32bce97eff8c20ec2af159ba35890d9331aa353812041f918b68a71bf075c5fa.jpg'
import img5 from '../assets/6cde2126-d50a-11ee-8bac-0aa567ef077d.avif'
import img6 from '../assets/1200x675.jpg'
import img7 from '../assets/Screen Shot 2021-06-11 at 5.15.07 PM.png'
import img8 from '../assets/JunkOrJackpot.avif'
import img9 from '../assets/VeryScaryLovers.jpg'

const CATEGORIES = ['All', 'TV Show', 'Podcast']

const PROJECTS = [
  {
    id: 1,
    title: 'Who Do You Believe?',
    category: 'TV Show',
    year: '2022',
    description: "True crime series uniquely formatted to detail both parties' recounts of the alleged crime.",
    tags: ['Identity', 'Print', 'Digital'],
    color: '#2d6a4f',
    image: img1,
    link: 'https://www.youtube.com/watch?v=eIp-BcS6C1E&list=PLDe0CguuqcMAx_p6d3RDVBo82Kd9R45mb',
  },
  {
    id: 2,
    title: 'The Real Murders of Atlanta',
    category: 'TV Show',
    year: '2023',
    description: 'True crime series uncovering the horrifying murders throughout Atlanta, Georgia.',
    tags: ['Documentary', 'Cinematography', 'Editing'],
    color: '#1a1a2e',
    image: img2,
    link: 'https://www.youtube.com/watch?v=vlb1-gLdbP4',
  },
  {
    id: 3,
    title: 'Zillow Gone Wild',
    category: 'TV Show',
    year: '2025',
    description: 'Reality series about the wildest and wackiest homes in America, hosted by Jack McBrayer.',
    tags: ['Reality', 'Direction', 'Production'],
    color: '#3d0c11',
    image: img3,
    link: 'https://www.youtube.com/watch?v=l7f6ZWm0vqg',
  },
  {
    id: 4,
    title: 'The Real Murders of Orange County',
    category: 'TV Show',
    year: '2023',
    description: 'True crime series uncovering the horrifying murders across Orange County, California.',
    tags: ['True Crime', 'Documentary', 'Production'],
    color: '#1c1c1c',
    image: img4,
    link: 'https://www.youtube.com/watch?v=kno2aLLnWW4&list=PL7yRqtDfF-XPOGy-DqFJg2ugkP2NFeI3K&index=28',
  },
  {
    id: 5,
    title: 'Pitbull and Parolees',
    category: 'TV Show',
    year: '2022',
    description: 'Docu-follow series about a shelter who hires parolees to give dogs and people second chances.',
    tags: ['Docu-Follow', 'Story Producer', 'Field'],
    color: '#0d1b2a',
    image: img5,
    link: 'https://www.youtube.com/watch?v=W6RysmMUDO8',
  },
  {
    id: 6,
    title: 'Very Scary People',
    category: 'TV Show',
    year: '2024',
    description: 'True crime series showcasing 8 murders and the psychology behind them.',
    tags: ['True Crime', 'Production', 'Post'],
    color: '#1b1b2f',
    image: img6,
    link: 'https://www.youtube.com/watch?v=xlyzsT_2lFE',
  },
  {
    id: 7,
    title: 'Backyard Bar Wars',
    category: 'TV Show',
    year: '2021',
    description: 'Competition series where two homeowners build the best bar, hosted by Chris Distefano.',
    tags: ['Competition', 'Reality', 'Production'],
    color: '#3b2507',
    image: img7,
    link: 'https://www.youtube.com/watch?v=aKdPe0A_NN4',
  },
  {
    id: 8,
    title: 'Junk or Jackpot',
    category: 'TV Show',
    year: '2025',
    description: 'Reality series about funding home renovations by selling prized collections, hosted by Bobby Berk.',
    tags: ['Reality', 'Story Producer', 'Field'],
    color: '#003049',
    image: img8,
    link: 'https://www.youtube.com/watch?v=kAaP2OMHyBg',
  },
  {
    id: 9,
    title: 'Very Scary People',
    category: 'Podcast',
    year: '2024',
    description: 'True crime podcast showcasing gruesome murders and the psychology behind them.',
    tags: ['Podcast', 'True Crime', 'Production'],
    color: '#1b1b2f',
    image: img6,
  },
    {
    id: 10,
    title: 'Very Scary Lovers',
    category: 'TV Show',
    year: '2022',
    description: 'Hosts Donnie Wahlberg and Jenny McCarthy-Wahlberg dig deep behind the headlines to reveal the gritty realities of diabolical couples whose dark and twisted love drives them to murder.',
    tags: ['Podcast', 'True Crime', 'Production'],
    color: '#1b1b2f',
    image: img9,
    link: 'https://www.youtube.com/watch?v=-YElWXNki5Q',
  },
]

function ProjectCard({ project }) {
  const cardContent = (
    <>
      <div
        className="project-thumbnail"
        style={!project.image ? { background: project.color } : undefined}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="project-thumb-img"
          />
        )}
        <span className="project-category-badge">{project.category}</span>
        {project.link && (
          <span className="project-watch-badge">Watch &#8599;</span>
        )}
      </div>
      <div className="project-info">
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </>
  )

  if (project.link) {
    return (
      <a
        className="project-card project-card--linked"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    )
  }

  return <div className="project-card">{cardContent}</div>
}

function WorkExamples() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <section className="section work-section">
      <div className="work-header">
        <h1>Work Examples</h1>
        <p className="work-subtitle">A selection of projects across TV, documentary, reality, and podcast.</p>
      </div>

      <div className="category-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No projects in this category yet.</p>
      )}
    </section>
  )
}

export default WorkExamples
