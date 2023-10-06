import '@styles/globals.css'

import Particles from './ParticlesBg.jsx'
export const metadata = {
  title: "Dylan St. Hilaire's Portfolio",
  description: 'Software Engineering and Web Developer Portfolio'
}

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
      <body className="bg-blue-200">
      <Particles/>
        <div className="">
          <div className=""/>
        </div>
      <main className="app">
        {children}
      </main>
      </body>
    </html>
  )
}

export default RootLayout;
