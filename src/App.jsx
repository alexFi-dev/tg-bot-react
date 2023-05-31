import { useEffect } from 'react';
import './App.css'
import { useTelegram } from './components/hooks/useTelegram'
import Header from './components/Header/Header'

function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect( () => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
      <div>hello</div>
      <button onClick={onToggleButton}>toggle</button>
    </>
  )
}

export default App
