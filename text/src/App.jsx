import { useState } from 'react'
import TextForm from './component/TextForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextForm />
    </>
  )
}

export default App
