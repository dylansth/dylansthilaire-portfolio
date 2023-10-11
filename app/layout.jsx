import '@styles/globals.css'

import { Inter } from 'next/font/google';

import TopNav from './TopNav.jsx'

export const metadata = {
  title: "Dylan St. Hilaire's Portfolio",
  description: 'Software Engineering and Web Developer Portfolio'
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const RootLayout = ({ children }) => {
  return (
    <html Lang="en" className={inter.className}>
      <body className="bg-blue-800">
      <main className="app">
        <TopNav/>
        {children}
      </main>
      </body>
    </html>
  )
}

export default RootLayout;
