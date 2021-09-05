import React from 'react'

const Score = ({score,clr}) => {
    return (
        <div className="molescore" style={{color: {clr}}}>
            <h2>Score : {score}</h2>
        </div>
    )
}

export default Score
