import { Button, Modal } from 'flowbite-react'
import { useState } from 'react'
import starsWarning from './assets/stars-warning.svg'
import fiveThreeNine from './assets/photoshoot-pics/MelodyHollis-539.jpg'
import sixSevenNine from './assets/photoshoot-pics/MelodyHollis-679.jpg'
import sevenOneZero from './assets/photoshoot-pics/MelodyHollis-710.jpg'
import fourTwoNine from './assets/photoshoot-pics/MelodyHollis-429.jpg'
import oneNineEight from './assets/photoshoot-pics/MelodyHollis-198.jpg'
import fiveNineNine from './assets/photoshoot-pics/MelodyHollis-599.jpg'

const galleryImages = [
  fiveThreeNine,
  sixSevenNine,
  sevenOneZero,
  fourTwoNine,
  oneNineEight,
  fiveNineNine,
]

function CustomGallery() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div id="gallery" className="flex flex-col m-5 items-center pt-16">
      <img src={starsWarning} alt="" />
      <h2 className="text-center underline m-5">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 bg-slate-200 p-5 md:p-10 rounded-xl">
        {galleryImages.map((image) => (
          <img
            className="h-auto max-w-full rounded-lg shadow-2xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"
            src={image}
            alt=""
            key={image}
          />
        ))}
        <Button
          outline
          gradientDuoTone="purpleToPink"
          className=""
          onClick={() => setOpenModal(true)}
        >
          See More
        </Button>
        <Modal
          size={'7xl'}
          dismissible
          show={openModal}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header className="">
            <img className="inline mr-5" src={starsWarning} alt="" />
            Coming Soon!
          </Modal.Header>
        </Modal>
      </div>
    </div>
  )
}

export default CustomGallery
