import profilePhoto from '../assets/RonaldLewisProfile.jpg'

function AboutMe() {
  return (
    <section className="section about-section">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="about-hero">
        <div className="about-intro">
          <p className="about-eyebrow">Director &bull; Producer &bull; Storyteller</p>
          <h1>Ronald Lewis</h1>
          <p className="tagline">
            Crafting cinematic experiences that move audiences&mdash;from concept to final cut.
          </p>
          <div className="hero-badges">
            <span className="hero-badge">Los Angeles, CA</span>
            <span className="hero-badge">7+ Years</span>
            <span className="hero-badge">Film &amp; TV</span>
          </div>
        </div>
        <div className="profile-photo-wrap">
          <img
            src={profilePhoto}
            alt="Ronald Lewis"
            className="profile-photo"
          />
        </div>
      </div>

      {/* ── Cards ─────────────────────────────────────────── */}
      <div className="about-grid">
        <div className="about-card">
          <h2>Who I Am</h2>
          <p>
            I’m Ronald Lewis, a Los Angeles based producer with credits across ABC, Oxygen, truTV, A&E, Netflix, Discovery, Animal Planet, MTV, and ID.
          </p>
          <p>
            I started in development, pitching and helping sell projects to top buyers. 
            After earning my bachelor’s degree in television production, 
            I moved into unscripted and found my lane in story producing.
          </p>
          <p>
            I later earned a Master’s degree in Entertainment Industry Management and have worked across docu follow, true crime, home renovation, reality, and documentary. 
            With experience in development, field, and post, I help shape concepts into compelling stories.
          </p>
        </div>

        <div className="about-card">
          <h2>What I Do</h2>
          <ul className="skill-list">
            <li><span className="skill-icon">&#9654;</span> Video Production &amp; Editing</li>
            <li><span className="skill-icon">&#9654;</span> Brand Identity Design</li>
            <li><span className="skill-icon">&#9654;</span> Content Strategy</li>
            <li><span className="skill-icon">&#9654;</span> Photography &amp; Photo Editing</li>
            <li><span className="skill-icon">&#9654;</span> Social Media Direction</li>
            <li><span className="skill-icon">&#9654;</span> Music &amp; Audio Production</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>My Values</h2>
          <p>
            Story is everything. I&rsquo;m driven by the belief that great unscripted television comes from clarity, 
            authenticity, and craft finding the emotional core, honoring real people, 
            and shaping moments into narratives that keep audiences locked in. 
            I value collaboration, strong communication, and a “make it better every pass” mindset, 
            whether I&rsquo;m in the field, in post, or developing a concept from the ground up.
          </p>
        </div>

        <div className="about-card contact-card">
          <h2>Get In Touch</h2>
          <ul className="contact-list">
            <li><strong>Email:</strong> <a href="mailto:ronaldlewis.prod@gmail.com">ronaldlewis.prod@gmail.com</a></li>
            <li><strong>Location:</strong> Los Angeles, CA</li>
            <li><strong>Instagram:</strong> @ronlewisprod</li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ronald-lewis-b3a97a186/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ronaldlewis</a></li>
            <li><strong>IMDb:</strong> <a href="https://www.imdb.com/name/nm13491855/" target="_blank" rel="noopener noreferrer">imdb.com/name/nm13491855</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
