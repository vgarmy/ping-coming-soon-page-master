import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div role="main" className="h-screen w-full flex flex-col items-center justify-start pt-[4rem]">
      <div className="w-[39.6rem] text-center">
        <h1>We are launching soon!</h1>
        <p>Subscribe and get notified</p>
      </div>
    </div>
  )
}

export default App
