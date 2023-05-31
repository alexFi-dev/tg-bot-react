import { useEffect } from 'react';
import './App.css'

const tg = window.Telegram.WebApp

function App() {

  useEffect( () => {
    tg.ready()
  }, [])

  const onClose = () => {
    tg.close()
  }

  return (
    <>
      <div>hello</div>
      <button onClick={onClose}>close</button>
    </>
  )
}

export default App
