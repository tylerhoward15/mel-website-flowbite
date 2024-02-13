import { Button } from 'flowbite-react'

const modules = import.meta.glob(['./assets/posters/*.{jpg,png}'], {
  eager: true,
  query: '?url',
  import: 'default',
})

const posters: string[] = Object.values(modules) as string[]

function CustomCredits() {
  return (
    <div className="flex flex-col m-5">
      <h2 className="text-center underline m-5">Featured Credits</h2>
      <div className="grid grid-cols-2 gap-2">
        {posters.map((poster) => {
          return (
            <div key={poster}>
              <img
                className="h-auto max-w-full shadow-2xl"
                src={poster}
                alt=""
              />
            </div>
          )
        })}
      </div>
      <Button outline gradientDuoTone="purpleToPink" className="m-5">
        Full Resume
      </Button>
    </div>
  )
}

export default CustomCredits
