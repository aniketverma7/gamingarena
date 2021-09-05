import React, {useRef, useState } from 'react';
import Section from '../../comp/Section/Section';
import { Data } from '../../comp/data';
export default function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioEl = useRef(null);
    return (
        <div className="home">
            <audio
                ref={audioEl}
                webkit-playsinline="true"
               playsInline={true}
                src='./audio/homeaudio.mp3'
                autoPlay=""
            />
            {
                Data.map((data, key) => {
                    return (
                        <Section rimg={data.rimg} 
                        title={data.title} 
                        gameDesc={data.desc}
                        lcolor = {data.lcolor}
                            dcolor={data.dcolor}
                            limg={data.limg}
                            url={data.url}
                        />
                   )
               })
            }
        </div>
    )
}
