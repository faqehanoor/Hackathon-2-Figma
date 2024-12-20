import React from 'react';
import Image from 'next/image';
import Card from '@/Images/fixed-height (8).png';
import Card2 from '@/Images/fixed-height (9).png'
import Card3 from '@/Images/unsplash_tVEqStC2uz8.png'

export default function FeaturedPosts() {
  return (
    <div className="featured-posts-section">
      <h1 className="posts-title">Practice Advice</h1>
      <h2 className="posts-subtitle">Featured Posts</h2>
      <p className="posts-description">
        Problems trying to resolve the conflicts between the <br />
        two major realms of Classical Physics: Newtonian mechanics
      </p>

      <div className="posts-card-container">
       
        <div className="post-card">
          <div className="post-card-content">
            <div className="post-card-front">
              <Image src={Card} alt="Post 1" />
              <div className="post-details">
                <h3>Trending Now!</h3>
               
              </div>
            </div>
            <div className="post-card-back">
              <h3>"Dressing for Every Season"
              </h3>
            </div>
          </div>
        </div>

       
        <div className="post-card">
          <div className="post-card-content">
            <div className="post-card-front">
              <Image src={Card2} alt="Post 2" />
              <div className="post-details">
                <h3>Elevate Your Style!
                </h3>
               
              </div>
            </div>
            <div className="post-card-back">
              <h3>"Top Picks for Everyday Style"
              </h3>
            </div>
          </div>
        </div>

      
        <div className="post-card">
          <div className="post-card-content">
            <div className="post-card-front">
              <Image src={Card3} alt="Post 3" />
              <div className="post-details">
                <h3>Editor's Choice!
                </h3>
             
              </div>
            </div>
            <div className="post-card-back">
              <h3>"Must-Know Style Tips for 2024"
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
