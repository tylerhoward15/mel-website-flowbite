import { Button } from 'flowbite-react'
import melHero from './assets/misc-melody/melody-main-hero-transparent-cropped.png'
import { HiOutlineArrowRight } from 'react-icons/hi'

function CustomHero() {
  return (
    <div className="bg-gradient-to-r from-gray-500 to-gray-400 md:grid md:grid-cols-2 p-3 pb-0 font-bold">
      <div className="z-0">
        <h2 className="text-[#f8f9fa]">Melody Hollis</h2>
        <h2 className="text-[#212529]">Actor, Singer, Dancer</h2>
        <Button outline gradientDuoTone="purpleToPink" className="my-3">
          Let's Talk
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <div className="text-[#f8f9fa] row-start-2">
        <h2>Scrolling Ticker * Scrolling Ticker </h2>
      </div>
      <img
        className="z-1 row-span-2"
        src={melHero}
        alt="Main picture of Melody"
      />
    </div>
  )
}

export default CustomHero
