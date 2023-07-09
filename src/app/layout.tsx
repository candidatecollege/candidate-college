import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Candidate College - Education Platform for Students in Indonesia',
  description: 'Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.',
  authors: [{
    name: 'Web Developer Candidate College Batch 1',
    url: 'https://candidatecollegeind.com'
  }],
  icons: 'https://i.postimg.cc/d02MsV74/logo-cc.png',
  keywords: [
    'College','Kampus', 'Fasilitas', 'Students', 'Student', 'Mahasiswa', 'Indonesia', 'Candidate College', 'Education System', 'Education in Indonesia', 'Candidate College', 'Event', 'UTBK', 'Tes TOEFL', 'Internship', 'Magang', 'Platform Edukasi',
  ],
  publisher: "Rumah Web",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  referrer: 'origin',
  robots: 'index, follow', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  )
}
