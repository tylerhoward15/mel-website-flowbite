import { Button } from 'flowbite-react'
const modules = await import.meta.glob(
  ['./assets/photoshoot-pics/*.{jpg,png}'],
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

const galleryImages: string[] = Object.values(modules) as string[]

function CustomGallery() {
  return (
    <div className="flex flex-col m-5">
      <h2 className="text-center underline m-5">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {galleryImages.slice(0, 6).map((image) => (
          <img
            className="h-auto max-w-full rounded-lg shadow-2xl"
            src={image}
            alt=""
            key={image}
          />
        ))}
      </div>
      <Button outline gradientDuoTone="purpleToPink" className="m-5">
        See More
      </Button>
    </div>
  )
}

export default CustomGallery
