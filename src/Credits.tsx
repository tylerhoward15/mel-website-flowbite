import { Button } from 'flowbite-react'
// import annie from './assets/posters/annie-poster.jpg'
import criminalMinds from './assets/posters/criminal-minds-poster.jpg'
import fredClaus from './assets/posters/Fred-claus-poster.jpg'
import goldenChristmas from './assets/posters/golden-christmas-poster.jpg'
import vice from './assets/posters/vice-poster.jpg'
import whiteChristmas from './assets/posters/white-christmas-poster.png'
import youngRestless from './assets/posters/young-and-restless-poster.jpg'

function CustomCredits() {
  const posters = [
    // annie,
    criminalMinds,
    fredClaus,
    goldenChristmas,
    vice,
    whiteChristmas,
    youngRestless,
  ]

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center">Featured Credits</h1>

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
