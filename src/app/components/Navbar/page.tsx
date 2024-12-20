import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Bandage</Link>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>

 
        <li className="shop">
          <a href="#" className="shop-link">Shop</a>
          <ul className="submenu">
            <li><Link href="/shop/new-arrivals">New Arrivals</Link></li>
            <li><Link href="/shop/sale">Sale</Link></li>
            <li><Link href="/shop/categories">Categories</Link></li>
          </ul>
        </li>

        <li><Link href="/About">About</Link></li>
        <li><Link href="/Blog">Blog</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
        <li><Link href="/Pages">Pages</Link></li>
      </ul>

      <div className="right-links">
        <Link href="/login">Login / Register</Link>
        <div className="cart-icon">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
