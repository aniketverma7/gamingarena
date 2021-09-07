import React from 'react'
import { Link } from 'react-router-dom'
import "./section.css"
const Section = ({limg,title,gameDesc,rimg,lcolor,dcolor,url,id}) => {
    const radient ={
        background: `radial-gradient(${lcolor},${dcolor})`
    }
    return (
        <div className="section-container" id={id} style={radient}>
            {
                limg&& <img src={limg} alt='limg'></img>
            }
            <div className="desc">
                <h2 className="title">{title}</h2>
                <p className="game-desc">{gameDesc}</p>
                <Link to={url}>
                <button className="play-btn">Play</button>
                </Link>
            </div>
            {
                rimg&& <img src={rimg} alt='rimg'></img>
            }
        </div>
    )
}

export default Section;