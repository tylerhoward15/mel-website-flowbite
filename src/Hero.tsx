import { Button } from 'flowbite-react'
import melHero from './assets/misc-melody/melody-main-hero-transparent-cropped.png'
import { HiOutlineArrowRight } from 'react-icons/hi'
import stars from './assets/stars.svg'

const ticks = ['Actor', 'Singer', 'Dancer', 'Teacher', 'Broadway', 'Theater']

function CustomHero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-500 to-gray-400 md:grid md:grid-cols-2 p-3 pb-0 font-bold overflow-hidden">
      <div className="">
        <h2 className="text-[#f8f9fa]">Melody Hollis</h2>
        <h2 className="text-[#212529]">Actor, Singer, Dancer</h2>
        <Button outline gradientDuoTone="purpleToPink" className="my-3">
          Let's Talk
          <HiOutlineArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <div className="text-[#f8f9fa] row-start-2 absolute top-1/2">
        <div className="inline-flex w-screen">
          {ticks.map((tick) => {
            return (
              <div className="flex-none" key={tick}>
                <h2 className="inline p-5 md:p-10">{tick}</h2>
                <img className="inline" src={stars}></img>
              </div>
            )
          })}
        </div>
      </div>
      <img
        className="z-50 row-span-2 relative"
        src={melHero}
        alt="Main picture of Melody"
      />
    </div>
  )
}

export default CustomHero
