import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

function App() {

  return (
    <>
      <div className='bg-black h-screen '>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
      </div>
    </>
  )
}

export default App
