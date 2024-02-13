import { Button, Modal } from 'flowbite-react'
import singingGirl from './assets/singing-girl.svg'
import bigPic from './assets/photoshoot-pics/MelodyHollis-107.png'
import rectanglePic from './assets/photoshoot-pics/MelodyHollis-008.png'
import squarePic from './assets/photoshoot-pics/MelodyHollis-206.png'
import starsWarning from './assets/stars-warning.svg'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useState } from 'react'

function CustomAboutMe() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div id="about" className="flex flex-col items-center m-5 pt-16">
      <img className="max-w-xs" src={singingGirl} alt="Singing girl svg" />
      <img src={starsWarning} alt="" />
      <h2 className="m-5">
        An entertainer from birth and a performer by career.
      </h2>
      <Button
        outline
        gradientDuoTone="purpleToPink"
        className="m-5 self-start"
        onClick={() => setOpenModal(true)}
      >
        About Me
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Modal
        size={'7xl'}
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="">
          <img className="inline mr-5" src={starsWarning} alt="" />
          About Melody Hollis
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              I spent the first ten years of my life in Chicago where I made my
              professional stage debut at six years old in the Goodman Theatre's
              world premiere of Dollhouse, under the direction of Robert Falls.
              I was fortunate to work at many regional theaters including
              Marriott Lincolnshire and Theatre at the Center, as well as
              performing in 2 National Tours and the Original Broadway Company
              of Irving Berlin's White Christmas.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              I spent the next ten years of my life in Los Angeles, where I
              added a dozen National commercials, and film and television work
              to my resume. Some of my favorite appearances were in Criminal
              Minds, A Golden Christmas, and the recent release Vice. I
              continued my stage work starring in the title role of Annie, as
              well as the classics; Ah Wilderness, Summer and Smoke, and the
              musical Baby. I was one of the youngest performers ever to have a
              one-woman show which I performed in several venues in Los Angeles
              and Palm Springs. Since living in Los Angeles I have been very
              active in the Actor's Fund Looking Ahead program, both as a member
              of the leadership council and a mentor, as well as being seated
              for the last 4 years on the SAG-AFTRA young performers committee.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              I was living in New York before the pandemic but now I am back in
              Los Angeles. On top of all of my work in theater film and
              television, I created a podcast called Artistic Beginnings with my
              brother! It's an interview style podcast where we talk with
              creatives from all sides of the business about their artistic
              beginnings! You can listen now on all podcast platforms. Stay
              tuned to see what I'm up to next!
            </p>
          </div>
        </Modal.Body>
      </Modal>

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
