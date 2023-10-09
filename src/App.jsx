import { useEffect } from 'react';
import './App.css'
import { useTelegram } from './components/hooks/useTelegram'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import MVP from './components/MVP/mvp'

function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect( () => {
    tg.ready()
  }, [])

  return (
    <>
      <Header />
      <MVP />
      <Button onClick={onToggleButton}>toggle</Button>
    </>
  )
}

export default App
