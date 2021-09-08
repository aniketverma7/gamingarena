import React, { useState } from 'react';
import Section from '../../comp/Section/Section';
import { Data } from '../../comp/data';
import "./home.css"
export default function Home() {
    const [isOpen,setIsOpen]=useState(false);
    return (
        <div>
            <div className="nav">
                <a onClick={()=> setIsOpen(false)} href="#">GAMING ARENA</a>
                <div className={isOpen ? "navLink active" :"navLink"}>
                    <a onClick={()=> setIsOpen(false)} href="#s1">Mix-or-Match</a>
                    <a onClick={()=> setIsOpen(false)} href="#s2">Whack-a-Mole</a>
                    <a onClick={()=> setIsOpen(false)} href="#s3">Snake</a>
                    <a onClick={()=> setIsOpen(false)} href="#s4">Rock-Paper-Scissors</a>
                </div>
                <a href="#menu" onClick={()=> setIsOpen(!isOpen)} className={isOpen?"menu isOpen" :"menu"}><span></span></a>
            </div>

            <div className="home">
            
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
                            id={data.id}
                            key={key}
                        />
                   )
               })
            }
        </div>
        <div className="footer">
            <h2>Created by Amit Kumar & Aniket Verma.</h2>
            <a target="_blank" rel="noreferrer"  href="https://spider.istebits.com/">Spider 2.0 : The Web Crawler</a> 
        </div>
        </div>
    )
}