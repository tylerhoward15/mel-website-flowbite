import { Button } from 'flowbite-react'
import starsWarning from './assets/stars-warning.svg'

const modules = import.meta.glob(['./assets/posters/*.{jpg,png}'], {
  eager: true,
  query: '?url',
  import: 'default',
})

const posters: string[] = Object.values(modules) as string[]

function CustomCredits() {
  return (
    <div id="credits" className="flex flex-col m-5 items-center">
      <img className="" src={starsWarning} alt="" />
      <h2 className="text-center underline m-5">Featured Credits</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 bg-slate-200 p-5 rounded-xl m-5 ">
        <div className="col-span-2 md:col-span-1 md:row-span-2">
          <p className="">
            Monotonectally build quality human capital with turnkey channels.
            Professionally productivate intuitive services before market
            positioning intellectual capital.
          </p>
          <Button
            outline
            gradientDuoTone="purpleToPink"
            className="m-5"
            href="/Melody-Hollis-Resume.pdf"
            target="_blank"
          >
            Full Resume
          </Button>
        </div>
        <div className="grid col-span-2 grid-cols-2 gap-5 md:col-start-2 max-h-[80vh] overflow-y-scroll">
          {posters.map((poster) => {
            return (
              <div key={poster}>
                <img className="shadow-2xl" src={poster} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CustomCredits
