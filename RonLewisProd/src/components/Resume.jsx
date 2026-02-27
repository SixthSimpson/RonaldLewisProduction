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
      role: 'Senior Video Producer',
      org: 'Visionary Media Group',
      date: '2021 – Present',
      location: 'Los Angeles, CA',
      description: [
        'Lead end-to-end video production for brand campaigns and documentaries.',
        'Manage a team of 6 creatives across pre-production, shoot, and post.',
        'Delivered 40+ projects with a combined 10M+ views across platforms.',
      ],
    },
    {
      role: 'Creative Director',
      org: 'Freelance',
      date: '2018 – 2021',
      location: 'Remote',
      description: [
        'Directed brand identity projects for startups and independent artists.',
        'Produced music videos, lookbooks, and social content campaigns.',
        'Built and maintained long-term client relationships with 90% retention rate.',
      ],
    },
    {
      role: 'Multimedia Designer',
      org: 'Pulse Agency',
      date: '2015 – 2018',
      location: 'Atlanta, GA',
      description: [
        'Designed graphics, motion assets, and web visuals for entertainment clients.',
        'Collaborated with marketing teams on integrated digital campaigns.',
        'Won agency-of-the-year award in 2017 for client campaign performance.',
      ],
    },
  ]

  const education = [
    {
      role: 'B.F.A. in Film & Media Arts',
      org: 'California State University Northridge',
      date: '2017 – 2019',
      location: 'Northridge, CA',
    },
    {
      role: 'Certificate in Brand Strategy',
      org: 'Miami Ad School',
      date: '2016',
    },
  ]

  const skills = [
    { role: 'Tools & Software', org: 'Adobe Premiere Pro, After Effects, Photoshop, Illustrator, DaVinci Resolve, Logic Pro X, Figma', date: '' },
    { role: 'Production', org: 'RED & ARRI cinema cameras, lighting design, location sound, drone operation (FAA Part 107)', date: '' },
    { role: 'Languages', org: 'English (native), Spanish (conversational)', date: '' },
  ]

  return (
    <section className="section resume-section-wrapper">
      <div className="resume-header">
        <h1>Ronald Lewis</h1>
        <p className="resume-subtitle">Creative Professional &bull; Video Producer &bull; Brand Director</p>
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
