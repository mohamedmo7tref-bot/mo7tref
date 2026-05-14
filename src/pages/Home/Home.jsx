import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import About from '../../components/About'
import Services from '../../components/Services'
import Contact from '../../components/Contact'
import Hero from '../../components/Hero'

export default function Home() {



  return (
    <>
    {/* <h1 className='text-green-800 text-9xl'>hi</h1> */}
    <div dir="rtl" className="bg-slate-50 text-slate-900 min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar/>
      {/* Hero */}
      <Hero/>
      {/* Services */}
      <Services/>
      {/* About */}
      <About/>
      {/* Gallery */}
      <Gallery/>
      {/* Contact */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
    </>

  )
}
