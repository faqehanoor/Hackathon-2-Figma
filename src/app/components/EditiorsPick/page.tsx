import React from 'react';
import Card from "@/Images/card-item (1).png";
import Card3 from "@/Images/filter (1) (1).png"
import Card4 from "@/Images/filter (3).png"
import Image from 'next/image';

export default function EditorsPick() {
  return (
    <div className="editors-pick">
      <div className="pick">
        <h1>EDITOR'S PICK</h1>
      </div>
      <div className="name">
        <span>Problem trying to resolve the conflicts between</span>
      </div>
      <div className="card-container">
       
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Image src={Card} alt="Card1" />
              <div className="card-content">
                <h3>Card Title 1</h3>
                <p>This is the front of card 1.</p>
              </div>
            </div>
            <div className="card-back">
              <h3>80% OFF For MENS Collection</h3>
            </div>
          </div>
        </div>

      
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
           <Image src={Card3} alt=""/>
              <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is the front of card 2.</p>
              </div>
            </div>
            <div className="card-back">
              <h3>60% OFF for WOMENS Collection</h3>
            </div>
          </div>
        </div>

   
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <Image src={Card4} alt=''/>
              <div className="card-content">
                <h3>Card Title 3</h3>
                <p>This is the front of card 3.</p>
              </div>
            </div>
            <div className="card-back">
              <h3>Get 50% OFF on Kids Collection & Accessories</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
