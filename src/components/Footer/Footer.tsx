import { GithubIcon, TwitterIcon, InstagramIcon, TwitchIcon } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="card footer">
      <div className="tools">
        <div className="circle">
          <span className="box red"></span>
        </div>
        <div className="circle">
          <span className="box yellow"></span>
        </div>
        <div className="circle">
          <span className="box green"></span>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo">
            SportZone
          </div>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <GithubIcon className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <TwitterIcon className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <InstagramIcon className="social-icon" />
            </a>
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="social-link">
              <TwitchIcon className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2024 SportZone. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

