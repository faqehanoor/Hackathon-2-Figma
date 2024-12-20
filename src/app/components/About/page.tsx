import React from 'react';
import Image from 'next/image';
import AboutPic from '@/Images/none (2).png';
import Happy from '@/Images/desktop-stats-9.png';
import Video from '@/Images/Video card.png';
import Media from '@/Images/media.png';
import Media2 from '@/Images/media (1).png';
import Media3 from '@/Images/media (2).png';
import Row from '@/Images/row.png';
import Unsplash from '@/Images/desktop-testimonials-4.png';

export default function About() {
  return (
    <div>
      <section className="about-container">
        <div className="about-text">
          <h2>ABOUT COMPANY</h2>
          <h1>ABOUT US</h1>
          <p>We know how large objects act,<br />but things on a small scale</p>
          <div className="btn4">
            <button>Get Quote Now</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image">
          <Image src={AboutPic} alt="About us" layout="responsive" />
        </div>
      </section>

      <section className="last">
        <div>
          <span>Problems trying</span>
          <p className="bold-text">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div>
          <p className="gray-text">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </section>

      <div>
        <Image src={Happy} alt="Happy people" layout="responsive" />
      </div>

      <section className="video">
        <Image src={Video} alt="Video card" layout="responsive" />
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
      </section>

      <section className="team2">
        <h4>Problems trying to resolve the conflicts between the <br /> two major realms of Classical Physics: Newtonian mechanics</h4>
      </section>

      <section className="card-container">
        {[
          { image: Media, name: "Sophia Parker", title: "Manager", description: "This is the front of card 1." },
          { image: Media2, name: "Olivia Johnson", title: "Lead Developer", description: "This is the front of card 2." },
          { image: Media3, name: "Ethan Williams", title: "CEO", description: "This is the front of card 3." },
        ].map((card, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <div className="card-front">
                <Image src={card.image} alt={`Card with ${card.name}`} layout="responsive" />
                <div className="card-content">
                  <h3>Card Title {index + 1}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
              <div className="card-back">
                <h3>{card.name} ({card.title})</h3>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="big">
        <h3>Big Companies Are Here</h3>
        <p>Problems trying to resolve the conflicts between the <br /> two major realms of Classical Physics: Newtonian mechanics</p>
      </section>

      <div>
        <Image src={Row} alt="Companies Row" layout="responsive" />
      </div>

      <section className="pictures">
        <Image src={Unsplash} alt="Unsplash Image" layout="responsive" />
      </section>
    </div>
  );
}
