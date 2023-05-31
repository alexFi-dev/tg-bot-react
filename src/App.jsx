import { useEffect } from 'react';
import './App.css'
import { useTelegram } from './components/hooks/useTelegram';

function App() {

  const {tg, onToggleButton} = useTelegram()

  useEffect( () => {
    tg.ready()
  }, [])

  return (
    <>
      <div>hello</div>
      <button onClick={onToggleButton}>toggle</button>
    </>
  )
}

export default App
