
import React, { useEffect } from 'react'

export default function App(){
  
  const clips = [
      {name: "Heater 1", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", id:"Heater-1", keyCode: 81, keyId: "Q" } ,
      {name: "Heater 2", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", id: "Heater-2", keyCode: 87, keyId: "W"} ,
      {name: "Heater 3", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", id: "Heater-3", keyCode: 69, keyId: "E"} ,
      {name: "Heater 4", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", id: "Heater-4", keyCode: 65, keyId: "A"} ,
      {name: "Clap", clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", id: "Clap", keyCode: 83, keyId: "S"} ,
      {name: "Open HH", clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", id: "Open-HH", keyCode: 68, keyId: "D"} ,
      {name: "Kick n Hat", clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", id: "Kick-n-Hat", keyCode: 90, keyId: "Z"} ,
      {name: "Kick", clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", id: "Kick", keyCode: 88, keyId: "X"} ,
      {name: "Closed HH", clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", id: "Closed-HH", keyCode: 67, keyId: "C"}
  ]
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
  }, [])
  
  function DrumPads(){
      return (
        clips.map(item => {
        return (
            <div className="drum-pad" id={item.id} onClick={()=>selectBeat(item.keyId, item.name)} key={item.keyId}>
              <audio className="clip" id={item.keyId} src={item.clip}></audio>
              {item.keyId}
            </div>
        )})
      )
  }
  
  function selectBeat(e, name){
    clips.map(item => {
      if(e === item.keyId){
        let clickAudio = document.getElementById(item.keyId)
        clickAudio.play()
        document.getElementById('sound-name').innerHTML = name
      }
    }) 
  }
  
  function handleKeyDown(e, name){
    clips.map(item => {
      if(e.keyCode === item.keyCode){
        let audio = document.getElementById(item.keyId)
        audio.play()
        document.getElementById('sound-name').innerHTML = item.name
      }
    })
    
  }

  
  return(
    <div className="container" id="display">
        <div className="drum-pad-container">
            <DrumPads />
        </div>
      <div className="sound-container">
        <div id="sound-name" className="sound-name"></div>
      </div>
    </div>
      )
}
