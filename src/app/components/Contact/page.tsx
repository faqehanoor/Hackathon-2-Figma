import React from 'react';
import Image from 'next/image';
import Contact from '@/Images/none (1).png';

export default function ContactSection() {
  return (
    <div className="contact-container">

      <div className="contact-text">
        <div className="contact-heading">
          <h1>CONTACT US</h1>
        </div>

        <div className="contact-info">
          <h2>
            Get in touch <br /> today!
          </h2>
          <p>
            We know how large objects move,<br /> but skills on a small scale.
          </p>
          <div className="contact-details">
            <span>Phone: +451 215 215</span>
            <span>Fax: +451 215 215</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="contact-image">
        <Image src={Contact} alt="Contact Us" />
      </div>
    </div>
  );
}
