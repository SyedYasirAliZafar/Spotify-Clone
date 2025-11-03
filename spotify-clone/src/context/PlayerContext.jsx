import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playerContext = createContext();

const PlayerContextProvider = (props)=> {

    const audioRef = useRef();
    const seekBg = useRef()
    const seekBar = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const Play = ()=>{
        audioRef.current.play()
        setPlayStatus(true)
    }

      const Pause = ()=>{
        audioRef.current.pause()
        setPlayStatus(false)
    }

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        time,
        setTime,
        playStatus,
        setPlayStatus,
        Play,Pause
    }

    return(
        <playerContext.Provider value={contextValue} >
             {props.children}
        </playerContext.Provider>
    )
}

export default PlayerContextProvider;