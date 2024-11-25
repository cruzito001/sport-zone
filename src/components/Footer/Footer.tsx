import { TwitterIcon, InstagramIcon, FacebookIcon } from 'lucide-react'
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
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <TwitterIcon className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <InstagramIcon className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FacebookIcon className="social-icon" />
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

