import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomNavbar from './Navbar.tsx'
import CustomHero from './Hero.tsx'
import CustomAboutMe from './AboutMe.tsx'
import CustomCredits from './Credits.tsx'
import CustomGallery from './Gallery.tsx'
import CustomFooter from './Footer.tsx'
import { Flowbite } from 'flowbite-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Flowbite>
      <CustomNavbar />
      <CustomHero />
      <CustomAboutMe />
      <CustomCredits />
      <CustomGallery />
      <CustomFooter />
    </Flowbite>
  </React.StrictMode>
)
