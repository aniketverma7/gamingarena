import React from 'react';
import "./gameinfo.css";

export default function GameInfo({timer,flips}) {
    return (
        <div className="game-info-container">
                    <div className="game-info">
                Time:<span id="time-remaining">{timer}</span>
                    </div>
                    <div className="game-info">
                Flips:<span id="flips">{flips}</span>
                    </div>
        </div>
    )
}
