import { Button } from 'flowbite-react'

function CustomAboutMe() {
  return (
    <div className="fle flex-col">
      <img src="/vite.svg" alt="Singing girl svg" />
      <h1>An entertainer from birth and a performer by career.</h1>
      <Button pill outline>
        About Me
      </Button>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <img className="row-span-4 col-span-2" src="/vite.svg" alt="Mel pic" />
        <img className="col-span-2" src="/vite.svg" alt="Mel pic 2" />
        <img
          className="row-span-2 col-span-2"
          src="/vite.svg"
          alt="Mel pic 3"
        />
      </div>
    </div>
  )
}

export default CustomAboutMe
