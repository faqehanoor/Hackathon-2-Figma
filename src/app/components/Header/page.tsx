import React from 'react';

export default function Header() {
  return (
    <div className='blue-links-header'>
     
      <div className='header-content'>
       
        <div className='contact-info'>
          <a href="tel:+12255550118" className='phone'> 📞 (225) 555-0118</a>
          <a href="mailto:michelle.rivera@example.com" className='email'>✉️ michelle.rivera@example.com</a>
        </div>

        <span className='offer-text'>Follow Us to get a chance to win 80% off</span>

        <div className='follow-us'>
          <span>Follow us: </span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='social-icon'>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='social-icon'>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='social-icon'>Instagram</a>
        </div>
      </div>
    </div>
  );
}
