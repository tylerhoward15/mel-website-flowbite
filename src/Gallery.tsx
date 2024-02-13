import { Button } from 'flowbite-react'
import starsWarning from './assets/stars-warning.svg'
const modules = import.meta.glob(['./assets/photoshoot-pics/*.{jpg,png}'], {
  eager: true,
  query: '?url',
  import: 'default',
})

const galleryImages: string[] = Object.values(modules) as string[]

function CustomGallery() {
  return (
    <div className="flex flex-col m-5 items-center">
      <img src={starsWarning} alt="" />
      <h2 className="text-center underline m-5">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 bg-slate-200 p-5 md:p-10 rounded-xl">
        {galleryImages.slice(0, 6).map((image) => (
          <img
            className="h-auto max-w-full rounded-lg shadow-2xl transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300"
            src={image}
            alt=""
            key={image}
          />
        ))}
        <Button outline gradientDuoTone="purpleToPink" className="m-5">
          See More
        </Button>
      </div>
    </div>
  )
}

export default CustomGallery
