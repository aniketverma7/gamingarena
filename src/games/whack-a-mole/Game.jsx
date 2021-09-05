import React, { useRef, useState } from 'react'
import "./Game.css"
import Timer from "./Timer"
import Score from "./Score"
import Mole from "./Mole"
const Game = () => {

    const [playing ,setPlaying]=useState(false);
    const [score,setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const audioRef = useRef(null);
    const audioRef2 = useRef(null);

    const endGame = () => {
        setPlaying(false)
        setFinished(true)
        audioRef2.current.play();
      }
      const [hole ,setHole] = useState(0);

      const startGame = () => {
        setScore(0)
        setPlaying(true)
        setFinished(false)

        setInterval(()=>{
            let rand = Math.floor(Math.random()*9)
            setHole(rand)
        },1000)
      }
      

    const onWhack= (id)=> {
        
        if(id===hole) {
            audioRef.current.play();
            setScore(score+1)
        }
        
    };
    const TIME_LIMIT = 30000;
    return (
        <div className="molecontainer">
        <audio ref={audioRef} src="./Sounds/hit.mp3"></audio>
        <audio ref={audioRef2} src="./Sounds/endSound.mp3"></audio>
            <div className="section1">
                {playing && <Timer time={TIME_LIMIT} onend = {()=> endGame()}></Timer>}
                <h2>Whack-A-Mole</h2>
                {playing && <Score score={score} clr="#7e5631"></Score>}
            </div>
            <div className="mainSection">
                {!playing && !finished && <button className="btn" onClick={()=> startGame()}>Start</button>}
                {playing && 
                    <div className="moles">
                        {
                            new Array(9).fill().map((_, index) => (
                                index===hole?<Mole key={index} id={index} onWhack={onWhack} children={<img className="moleImg" src="./Images/mole.png" alt="mole"/>}/>:
                                <Mole key={index} id={index} onWhack={onWhack}/>
                                ))
                        }
                </div>
                }
                {finished &&   
                    <div className="finalScore">  
                    <Score score={score}  clr="#fff"/>
                    <button className="btn" onClick={startGame}> Play Again </button> 
                    </div> 
                }
            </div>
            
        </div>
    )
}

export default Game
