import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterClass from './Components/CounterClass'
import CounterFunctional from './Components/CounterFunctional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <CounterClass/>
       <CounterFunctional/>
      </div>
      
    </>
  )
}

export default App
