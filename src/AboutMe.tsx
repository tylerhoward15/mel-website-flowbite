import { Button } from 'flowbite-react'
import singingGirl from './assets/singing-girl.svg'
import bigPic from './assets/photoshoot-pics/MelodyHollis-107.png'
import rectanglePic from './assets/photoshoot-pics/MelodyHollis-008.png'
import squarePic from './assets/photoshoot-pics/MelodyHollis-206.png'
import { HiOutlineArrowRight } from 'react-icons/hi'

function CustomAboutMe() {
  return (
    <div className="flex flex-col items-center m-5">
      <img className="max-w-xs" src={singingGirl} alt="Singing girl svg" />
      <h2 className="m-5">
        An entertainer from birth and a performer by career.
      </h2>
      <Button outline gradientDuoTone="purpleToPink" className="m-5 self-start">
        About Me
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <div className="flex flex-row">
        <img
          className="basis-1/2 max-w-[50%] m-auto"
          src={bigPic}
          alt="bigPic"
        />
        <div className="basis-1/2 max-w-[50%]">
          <img className="" src={rectanglePic} alt="rectanglePic" />
          <img className="" src={squarePic} alt="squarePic" />
        </div>
      </div>
    </div>
  )
}

export default CustomAboutMe
