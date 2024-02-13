import { Button } from 'flowbite-react'

const modules = await import.meta.glob(['./assets/posters/*.{jpg,png}'], {
  eager: true,
  query: '?url',
  import: 'default',
})

const posters: string[] = Object.values(modules) as string[]

function CustomCredits() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center">Featured Credits</h1>
      <div className="grid grid-cols-2 gap-2">
        {posters.map((poster) => {
          return (
            <div key={poster}>
              <img className="h-auto max-w-full" src={poster} alt="" />
            </div>
          )
        })}
      </div>
      <Button>Full Resume</Button>
    </div>
  )
}

export default CustomCredits
