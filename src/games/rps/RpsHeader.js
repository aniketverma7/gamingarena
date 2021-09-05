import React from 'react'
import Score from "./Score"
const Header = ({score}) => {
    return (
        <div className="rpsheader">
                <h2>Rock Paper Scissors</h2>
                <Score score={score}></Score>
        </div>
    )
}

export default Header;
