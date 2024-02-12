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
    <div className="flex flex-col">
      <h1 className="text-3xl text-center">Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {galleryImages.map((image) => (
          <img
            className="h-auto max-w-full rounded-lg"
            src={image}
            alt=""
            key={image}
          />
        ))}
      </div>
      <Button>See More</Button>
    </div>
  )
}

export default CustomGallery
