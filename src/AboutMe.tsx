import { Button } from 'flowbite-react'
import singingGirl from './assets/singing-girl.svg'
import bigPic from './assets/photoshoot-pics/MelodyHollis-107.png'
import rectanglePic from './assets/photoshoot-pics/MelodyHollis-008.png'
import squarePic from './assets/photoshoot-pics/MelodyHollis-206.png'

function CustomAboutMe() {
  return (
    <div className="flex flex-col items-center">
      <img className="max-w-xs" src={singingGirl} alt="Singing girl svg" />
      <h1>An entertainer from birth and a performer by career.</h1>
      <Button pill outline>
        About Me
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
