import resumePDF from '../assets/RonaldLewisCreditsCopy.pdf'

function ResumeSection({ title, items }) {
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">{title}</h2>
      <div className="resume-items">
        {items.map((item, i) => (
          <div key={i} className="resume-item">
            <div className="resume-item-header">
              <div>
                <span className="resume-item-role">{item.role}</span>
                <span className="resume-item-org">{item.org}</span>
              </div>
              <span className="resume-item-date">{item.date}</span>
            </div>
            {item.location && (
              <span className="resume-item-location">{item.location}</span>
            )}
            {item.description && (
              <ul className="resume-item-desc">
                {item.description.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Resume() {
  const experience = [
    {
      role: 'Story Producer',
      date: '2022 – Present',
      location: 'Los Angeles, CA',
      description: [
        'Leads narrative development across production and post by building character arcs, structuring episodic storylines, and collaborating closely with editors to deliver emotionally resonant, ratings-driven content.',
      ],
    },
    {
      role: 'Field Producer',
      description: [
        'Produces story in the field by conducting interviews, tracking character development, identifying emerging beats, and ensuring continuity through post-production. Partners with Post producers and editors to shape raw footage into cohesive, high-impact episodes.',
      ],
    },
    {
      role: 'Development Associate',
      description: [
        'Contributes to series creation from concept to pitch by identifying talent, crafting show bibles, producing development shoots, editing sizzles, and shaping sellable formats aligned with network and streamer mandates.',
      ],
    },
  ]

  const education = [
    {
      role: "Master's Degree in Entertainment Industry Management",
      org: 'California State University Northridge',
      date: '2026',
      location: 'Northridge, CA',
    },
    {
      role: "Bachelor's Degree in Television Production with an emphasis in Directing",
      org: 'California State University Northridge',
      date: '2021',
      location: 'Northridge, CA',
    },
  ]

  const skills = [
    { role: 'Tools & Software', org: 'Avid Media Composer, Adobe Premiere, Final Cut X', date: '' },
  ]

  return (
    <section className="section resume-section-wrapper">
      <div className="resume-header">
        <h1>Ronald Lewis</h1>
        <p className="resume-subtitle">Development Producer &bull; Field Producer &bull; Post/Story Producer</p>
        <p className="resume-contact">
          <a href="mailto:ronaldlewis.prod@gmail.com">ronaldlewis.prod@gmail.com</a> &nbsp;&bull;&nbsp; Los Angeles, CA &nbsp;&bull;&nbsp; <a href="https://www.linkedin.com/in/ronald-lewis-b3a97a186/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ronaldlewis</a> &nbsp;&bull;&nbsp; <a href="https://www.imdb.com/name/nm13491855/" target="_blank" rel="noopener noreferrer">IMDb</a>
        </p>
        <a
          className="download-btn"
          href={resumePDF}
          download="RonaldLewis_Resume.pdf"
        >
          &#8681; Download Resume
        </a>
      </div>

      <ResumeSection title="Experience" items={experience} />
      <ResumeSection title="Education" items={education} />
      <ResumeSection title="Skills" items={skills} />
    </section>
  )
}

export default Resume
