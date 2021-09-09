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
             <img src={limg?limg:rimg} className="responsiveimage" alt='limg'></img>
            }
            {
                limg&& <img className="limg" src={limg} alt='limg'></img>
            }
            <div className="desc">
                <h2 className="title">{title}</h2>
                <p className="game-desc">{gameDesc}</p>
                <Link to={url}>
                <button className="play-btn">Play</button>
                </Link>
            </div>
            {
                rimg&& <img src={rimg} className="rimg" alt='rimg'></img>
            }
           <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
        </div>
    )
}

export default Section;