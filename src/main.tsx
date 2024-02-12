import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomNavbar from './Navbar.tsx'
import CustomHero from './Hero.tsx'
import CustomAboutMe from './AboutMe.tsx'
import CustomCredits from './Credits.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomNavbar />
    <CustomHero />
    <CustomAboutMe />
    <CustomCredits />
  </React.StrictMode>
)
