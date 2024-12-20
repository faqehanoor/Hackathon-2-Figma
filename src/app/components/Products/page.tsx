import React from 'react';
import Image from 'next/image';
import Card1 from "@/Images/fixed-height (1).png";
import Card2 from "@/Images/fixed-height (7).png";
import Card3 from "@/Images/product-cover-5 (9).png";
import Card4 from "@/Images/fixed-height.png";
import Card5 from "@/Images/fixed-height (6).png";
import Card6 from "@/Images/fixed-height (4).png";
import Card7 from "@/Images/fixed-height (5).png";
import Card8 from "@/Images/fixed-height (3).png";

export default function Product() {
  const products = [
    { image: Card1, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card2, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card3, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card4, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card5, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card6, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card7, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
    { image: Card8, title: "Graphic Design", department: "English Department", price: "$16.48", discount: "$6.48" },
  ];

  return (
    <div className="product-section">
      <div className="section-title">
        <h1>Featured Products</h1>
      </div>
      <div className="grid-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Image src={product.image} alt={product.title} />
            <div className="card-details">
              <h3>{product.title}</h3>
              <span>{product.department}</span>
              <div className="price">
                <span className="original-price">{product.price}</span>
                <span className="discount-price">{product.discount}</span>
              </div>
              <div className="color-dots">
                <span className="dot blue"></span>
                <span className="dot red"></span>
                <span className="dot green"></span>
                <span className="dot orange"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
