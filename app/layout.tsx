import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: '0.364 seconds',
  description: '0.364 seconds Resources',
  other:{
    'theme-color':'#0d1117',
    'color-scheme': 'dark only',
    'twitter:image':'https://0-364-secods-k4kp.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs9iym9n6%2Fproduction%2F5c0245ae442ae2ff4ad10681446b98aafc00dfe5-718x827.png&w=384&q=75',
    'twitter:card': 'summary_large_image',
    'og:url':'jsmastery.pro',
    'og:image':'https://0-364-secods-k4kp.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fs9iym9n6%2Fproduction%2F5c0245ae442ae2ff4ad10681446b98aafc00dfe5-718x827.png&w=384&q=75',
    'og:type':'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
