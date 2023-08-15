'use client'
import { CTA, ComingSoon, Footer, Navbar } from '@/components'
import React from 'react'

const About = () => {
  return (
    <main className="bg-white h-full">
      {/* Navbar */}
      <Navbar active='About Us' isDetail={false} />

      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
      <Footer />
      </div>
    </main>
  )
}

export default About