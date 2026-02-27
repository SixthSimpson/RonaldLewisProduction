import { useState } from 'react'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import WorkExamples from './components/WorkExamples'
import './App.css'

const TABS = ['About Me', 'Resume', 'Work Examples']

function App() {
  const [activeTab, setActiveTab] = useState('About Me')

  const renderTab = () => {
    switch (activeTab) {
      case 'About Me':    return <AboutMe />
      case 'Resume':      return <Resume />
      case 'Work Examples': return <WorkExamples />
      default:            return <AboutMe />
    }
  }

  return (
    <div className="portfolio">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-name">Ronald Lewis</span>
            <span className="brand-title">Creative Professional</span>
          </div>
          <nav className="tab-nav">
            {TABS.map(tab => (
              <button
                key={tab}
                className={`tab-btn${activeTab === tab ? ' active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="tab-content">
        {renderTab()}
      </main>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Ronald Lewis. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
