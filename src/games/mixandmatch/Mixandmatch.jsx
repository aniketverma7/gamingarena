import React, { useRef } from 'react';
import GameInfo from './components/gameinfo/GameInfo';
import "./mixandmatch.css";
import { gameData } from './gamedata';
import { useState } from 'react';
import { useEffect } from 'react';
import arrayShuffle from 'array-shuffle';
import { Link } from 'react-router-dom';

export default function Mixandmatch() {
     
    const flipRef = useRef(null);
    const backgroundRef = useRef(null);
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const dataArray = [...gameData, ...gameData];
    const [pairOfGameData, setPairOfGameData] = useState([]);
    const [start, setStart] = useState(true);
    const [gameOver, setgameOver] = useState(false);
    const [victory, setVictory] = useState(false);
    const [active, setActive] = useState(false);
    const [timer, setTimer] = useState(100);
    const [flips, setFlips] = useState(0);


    const handleRestart = () => {
        setMatched([]);
        setOpenedCard([]);
        setTimer(100);
        setFlips(0);
        setActive(true);
        setVictory(false);
        setgameOver(false);
        backgroundRef.current.play();
        setPairOfGameData(arrayShuffle(dataArray));
    }

    function flipCard(index) {
        setOpenedCard((opened) => [...opened, index]);
        setFlips(flips + 1);
            flipRef.current.play();
    }

    const handleStart = () => {
        setStart(false);
        setActive(true);
        backgroundRef.current.play();
    }
    useEffect(() => {
        setPairOfGameData(arrayShuffle(dataArray));
    },[]);
    useEffect(() => {
        if (active) {
            const res =
                timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
                if (timer === 0) {
                    setActive(false);
                    setgameOver(true);
                    backgroundRef.current.pause();
                }
            return () => clearInterval(res);
        }
    }, [timer, active]);

    useEffect(() => {
         function countUnique(iterable) {
            return new Set(iterable).size;
        }
        const size = countUnique(matched);
        if (size === 8) {
            setActive(false);
            setVictory(true);
            backgroundRef.current.pause();
        }
    },[openedCard,matched])

    useEffect(() => {
        if (openedCard < 2) return;

        const firstMatched = pairOfGameData[openedCard[0]];
        const secondMatched = pairOfGameData[openedCard[1]];
    
        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched((matched)=>[...matched, firstMatched.id]);
        }
        if (openedCard.length === 2) {
            setTimeout(() => setOpenedCard([]), 1000);
        }
    }, [openedCard,pairOfGameData]);
    return (
        <div className="mixandmatch">
            <audio ref={flipRef} src="./audio/f.mp3"/>
            <audio ref={backgroundRef} src="./audio/creepy.mp3"/>
            <h1 className="game-title">Mix-or-Match</h1>
            <div className={`overlay-text ${start?"visible":""}`} onClick={handleStart}>
                     Click to Start
            </div>
            <div id="game-over-text" className={`overlay-text ${gameOver?"visible":""}`}>
                GAME OVER
                <span className="overlay-text-small" onClick={handleRestart}>Click to Restart</span>
                <Link to="/">
                <span className="overlay-text-small">Go Back to Home</span>
                </Link>
            </div>
            <div id="victory-text" className={`overlay-text ${victory?"visible":""}`}>
               VICTORY
               <span className="overlay-text-small" onClick={handleRestart}>Click to Restart</span>
                 </div>
            <div className="game-container">
                <GameInfo timer={timer} flips={flips} />

                {pairOfGameData.map((data, index) => {
                    let isFlipped = false;
                    if (openedCard.includes(index)) isFlipped = true;
                    if (matched.includes(data.id)) isFlipped = true;
                   
                    return (
                        <div className={`gameCard ${isFlipped ? "flipped" : ""} `}
                        key={index}
                        >
                            <div className="inner">
                                <div className="front">
                                    <img src={data.img_src} style={{ height: "100%", width: '100%' }} alt="" />
                                </div>
                                <div className="back"
                                    onClick={() => flipCard(index)}
                                >
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
