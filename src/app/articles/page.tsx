'use client'
import { Footer, Navbar } from '@/components'
import React from 'react'

const Articles = () => {
  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active='Articles' />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Articles