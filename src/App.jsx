import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PlayersList from './PlayersList'
const App =()=> {

  return (
    <>
    <h1 className='text-center text-yellow-950 text-5xl'>FIFA Player Cards</h1>
    <PlayersList />
    </>
  )
}
export default App
