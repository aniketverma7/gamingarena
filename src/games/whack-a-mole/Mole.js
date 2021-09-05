import React from 'react'


const Mole = ({onWhack,children,id}) => {


    return (
        <button className="Mole" onClick={()=>{onWhack(id)}}>
            {children}
        </button>
    )
}

export default Mole
