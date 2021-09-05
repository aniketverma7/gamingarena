import React from 'react'

const Move = ({src,type,play,mname,pos}) => {
    
    return (
        <div onClick={play} className= {`${type} ${pos} `} title={mname}>
            <div className="img_container" title={mname}>
                <img src={src} alt="pickImg" title={mname}></img>
            </div>
        </div>
    )
}

export default Move