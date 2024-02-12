import { useState } from 'react'
import { Button } from 'flowbite-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button color="blue" onClick={() => setCount(count + 1)}>
        Flowbite Button with count: {count}
      </Button>
    </>
  )
}

export default App
