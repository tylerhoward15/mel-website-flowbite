import { Button } from 'flowbite-react'

function CustomHero() {
  return (
    <div className="flex">
      <div className="flex-shrink">
        <div className="z-0">
          <h1>Melody Hollis</h1>
          <h2>Actor singer dancer</h2>
          <Button pill outline>
            Lets Talk
          </Button>
        </div>
        <div className="z-0">
          <h2>Scrolling ticker * Scrolling Ticker </h2>
        </div>
      </div>
      <div className="flex-1 z-1">
        <img src="/vite.svg" alt="Main picture of Melody" />
      </div>
    </div>
  )
}

export default CustomHero
