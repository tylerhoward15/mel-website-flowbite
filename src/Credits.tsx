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

      <div className="grid grid-cols-2 gap-5 md:gap-10 bg-slate-200 p-5 md:p-10 rounded-xl">
        <p className="col-span-2">
          Monotonectally build quality human capital with turnkey channels.
          Professionally productivate intuitive services before market
          positioning intellectual capital.
        </p>
        <Button
          outline
          gradientDuoTone="purpleToPink"
          className="col-span-2 m-5"
        >
          Full Resume
        </Button>
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
    </div>
  )
}

export default CustomCredits
