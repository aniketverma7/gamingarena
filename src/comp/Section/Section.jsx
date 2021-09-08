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
            {/* <div className="break"></div>
             <div className="arrow bounce">
                        <a className="fa fa-arrow-down fa-2x" href="#"></a>
             </div> */}
        </div>
    )
}

export default Section;