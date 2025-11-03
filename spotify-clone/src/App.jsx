import { useContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { playerContext } from './context/PlayerContext'

function App() {

  const { audioRef, track} = useContext(playerContext)

  return (
    <>
      <div className='bg-black h-screen '>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
        <audio src={track.file} ref={audioRef} preload='auto' ></audio>
      </div>
    </>
  )
}

export default App
