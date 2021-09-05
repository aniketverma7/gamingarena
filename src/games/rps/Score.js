import React from 'react'

const Score = ({score}) => {
    return (
        <div className="score_div">
            <h2>Score</h2>
            <p>{score}</p>
        </div>
    )
}

export default Score;
