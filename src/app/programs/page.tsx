'use client'
import { Footer, Navbar } from '@/components'
import React from 'react'

const Programs = () => {
  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active='Programs' />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Programs