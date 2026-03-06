import profilePhoto from '../assets/RonaldLewisProfile.jpg'

function AboutMe() {
  return (
    <section className="section about-section">

      {/* Hero */}
      <div className="about-hero">
        <div className="about-intro">
          <p className="about-eyebrow"> Story Producer &bull; Producer &bull; Narrative Specialist</p>
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

      {/* Cards */}
      <div className="about-grid">

        {/* Full-width bio */}
        <div className="about-card about-card--full">
          <h2>Who I Am</h2>
          <div className="about-bio">
            <p>
              I&rsquo;m Ronald Lewis, a Los Angeles based producer with credits across ABC, Oxygen, truTV, A&amp;E, Netflix, Discovery, Animal Planet, MTV, and ID.
            </p>
            <p>
              I started in development, pitching and helping sell projects to top buyers.
              After earning my bachelor&rsquo;s degree in television production,
              I moved into unscripted and found my lane in story producing.
            </p>
            <p>
              I later earned a Master&rsquo;s degree in Entertainment Industry Management and have worked across docu follow, true crime, home renovation, reality, and documentary.
              With experience in development, field, and post, I help shape concepts into compelling stories.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="about-card">
          <h2>My Values</h2>
          <p>
            Story is everything. I&rsquo;m driven by the belief that great unscripted television comes from clarity,
            authenticity, and craft&mdash;finding the emotional core, honoring real people,
            and shaping moments into narratives that keep audiences locked in.
            I value collaboration, strong communication, and a &ldquo;make it better every pass&rdquo; mindset,
            whether I&rsquo;m in the field, in post, or developing a concept from the ground up.
          </p>
        </div>

        {/* Contact */}
        <div className="about-card contact-card">
          <h2>Get In Touch</h2>
          <ul className="contact-list">
            <li><strong>Email:</strong> <a href="mailto:ronaldlewis.prod@gmail.com">ronaldlewis.prod@gmail.com</a></li>
            <li><strong>Location:</strong> Los Angeles, CA</li>
            <li><strong>Instagram:</strong> <a href = "https://www.instagram.com/ronaldlewisprod?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"> @ronaldlewisprod</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ronald-lewis-b3a97a186/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ronaldlewis</a></li>
            <li><strong>IMDb:</strong> <a href="https://www.imdb.com/name/nm13491855/" target="_blank" rel="noopener noreferrer">imdb.com/name/nm13491855</a></li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default AboutMe
