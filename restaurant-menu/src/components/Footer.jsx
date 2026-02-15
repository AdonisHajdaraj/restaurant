import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Gourmet Italiano</h3>
          <p>Shije autentike italiane në zemër të Tiranës.</p>
          <p>Përbërës të freskët, receta tradicionale.</p>
        </div>
        
        <div className="footer-section">
          <h4>Orari</h4>
          <p>Hënë - Enjte: 09:00 - 23:00</p>
          <p>Premte - Shtunë: 09:00 - 00:00</p>
          <p>Diel: 12:00 - 22:00</p>
        </div>
        
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p><FaMapMarkerAlt /> Rr. "Deshmoret e Kombit", Tiranë</p>
          <p><FaPhone /> +355 69 123 4567</p>
          <p><FaEnvelope /> info@gourmetitaliano.al</p>
        </div>
        
        <div className="footer-section">
          <h4>Na Ndiqni</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Gourmet Italiano. Të gjitha të drejtat e rezervuara.</p>
      </div>
    </footer>
  );
}

export default Footer;