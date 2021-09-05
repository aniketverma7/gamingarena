import React, {useEffect,useRef ,useState } from 'react'

const Timer = ({time,interval=1000,onend}) => {

   
    const [internalTime, setInternalTime] = useState(time)
    
    const timerRef = useRef(time)  
    const timeRef = useRef(time)
    
    useEffect(() => {
        if (internalTime === 0 && onend) {
          onend()
        }
      }, [internalTime, onend])
    
    useEffect(() => {
        timerRef.current = setInterval(
            () => setInternalTime((timeRef.current -= interval)),interval
        )
        
        return () => {
        clearInterval(timerRef.current)
        }
    },[interval])
    

   


    return (
        <div className="timer">
            <h2>Time : {internalTime/1000} sec</h2>
        </div>
    )
}

export default Timer
