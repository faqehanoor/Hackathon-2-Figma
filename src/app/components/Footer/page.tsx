import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link href="/">Bandage</Link> {/* No <a> tag needed here */}
        </div>

        <div className="footer-follow">
          <span>Follow us: </span>
          <Link href="https://facebook.com" className="social-icon facebook">Facebook</Link>
          <Link href="https://twitter.com" className="social-icon twitter">Twitter</Link>
          <Link href="https://instagram.com" className="social-icon instagram">Instagram</Link>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h6>Company Info</h6>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/career">Careers</Link></li>
              <li><Link href="/hiring">We Are Hiring</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h6>Legal</h6>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h6>Features</h6>
            <ul>
              <li><Link href="/marketing">Business Marketing</Link></li>
              <li><Link href="/analytics">User Analytics</Link></li>
              <li><Link href="/live-chat">Live Chat</Link></li>
              <li><Link href="/support">Unlimited Support</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h6>Resources</h6>
            <ul>
              <li><Link href="/ios-android">iOS & Android</Link></li>
              <li><Link href="/demo">Watch a Demo</Link></li>
              <li><Link href="/customers">Customers</Link></li>
              <li><Link href="/api">API</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h6>Get In Touch</h6>
            <input type="email" placeholder="Your Email" />
            <button className="subscribe-btn">Subscribe</button>
            <p>More info and updates</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-text">Made With Love By Finland All Right Reserved</span>
      </div>
    </div>
  );
}
