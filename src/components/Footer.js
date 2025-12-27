import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-card">
          <a href="/" className="Logo">
            <p className="">Panda's Candle</p>
          </a>
          <div className="footer-title">
            <h1>Let your space glow with intention.</h1>
          </div>
          <div className="social-media">
            <button className="insta-btn">
              <a
                href="https://instagram.com/m_panda_f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
              </a>
            </button>
            <button className="whatsapp-btn">
              <a
                href="https://wa.me/919916588232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Whatsapp</span>
              </a>
            </button>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Panda's Candle. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer
