import { Button } from 'flowbite-react'
import melHero from './assets/misc-melody/melody-main-hero-transparent-cropped.png'

function CustomHero() {
  return (
    <div className="">
      <div className="relative flex flex-col h-dvh">
        <div className="z-0">
          <h1>Melody Hollis</h1>
          <h2>Actor singer dancer</h2>
          <Button pill outline>
            Lets Talk
          </Button>
        </div>
        <div className="">
          <h2>Scrolling ticker * Scrolling Ticker </h2>
        </div>
        <img
          className="z-1 absolute max-h-screen top-0 left-1/3 md:left-1/2"
          src={melHero}
          alt="Main picture of Melody"
        />
      </div>
    </div>
  )
}

export default CustomHero
