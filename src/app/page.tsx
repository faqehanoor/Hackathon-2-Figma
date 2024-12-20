import React from 'react'
import Header from '@/app/components/Header/page'
import Navbar from '@/app/components/Navbar/page'
import Home from '@/app/components/Home/page'
import About from '@/app/components/About/page'
import Footer from '@/app/components/Footer/page'
import EditiorsPick from '@/app/components/EditiorsPick/page'
import Products from '@/app/components/Products/page'
import ClassicProduct from '@/app/components/ClassicProduct/page'
import FluidContainer from '@/app/components/FluidContainer/page'
import Contact from '@/app/components/Contact/page'
import Post from '@/app/components/Post/page'

export default function page() {
  return (
    <div>
    <Header />
       <Navbar />
       <Home />
       <About />
       <EditiorsPick />
       <Products />
       <ClassicProduct />
       <FluidContainer />
       <Post />
       <Contact />
       <Footer />
    </div>
  )
}
