import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect( () => {
    tg.ready()
  }, [])

  return (
    <>
      <div>hello</div>
    </>
  )
}

export default App
