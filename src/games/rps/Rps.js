import { useState } from 'react';
import './rps.css';
import Header from './RpsHeader';
import Move from "./Move";
function Rps() {

  const [showRules,setShowRules] = useState(false);
  const [playing,setPlaying] = useState(false);
  const [randImg,setRandImg] = useState("");
  const [pickImg,setPickImg]=useState(null);
  const [score,setScore]=useState(0);
  const [stats,setStats] = useState("DRAW");
  const [moveType,setMoveType] = useState("");
  const [randmoveType,setRandMoveType] = useState("");

  const handleRule=()=>{
    setShowRules(!showRules)
  }

  const handlePlay=(e)=>{ 
    
    if(e.target.title==="rock"){
      setMoveType("rock_container");
      setPickImg("./Images/icon-rock.svg");
    }
    if(e.target.title==="paper"){
      setMoveType("paper_container");
      setPickImg("./Images/icon-paper.svg");
    }
    if(e.target.title==="scissors"){
      setMoveType("scissors_container");
      setPickImg("./Images/icon-scissors.svg");
    }

    let r = Math.floor(Math.random()*3);

    if(r===0){    
      setRandImg("./Images/icon-rock.svg");
      setRandMoveType("rock_container")
      if(e.target.title==="paper"){
        setScore(score+1);
        setStats("You win")
      }
      else if(e.target.title==="rock"){
        setStats("Draw")
      }
      else{
        setStats("You Lose")
      }
    }
    if(r===1){     
      setRandImg("./Images/icon-paper.svg");
      setRandMoveType("paper_container")
      if(e.target.title==="scissors"){
        setScore(score+1);
        setStats("You win")
      }
      else if(e.target.title==="paper"){
        setStats("Draw")
      }
      else{
        setStats("You Lose")
      }
    }
    if(r===2){
      setRandImg("./Images/icon-scissors.svg");
      setRandMoveType("scissors_container")
      if(e.target.title==="rock"){
        setScore(score+1);
        setStats("You win")
      }
      else if(e.target.title==="scissors"){
        setStats("Draw")
      }
      else{
        setStats("You Lose")
      }
    }

    

    setPlaying(true); 
  }



  return (
    <div className="App">
        <div className="rpscontainer">
          <Header score ={score}/>

          {!playing&&
            <div className="rpssection1_div">
            <div className="rpssection1">
                <img src="./Images/bg-triangle.svg" alt="triangle" className="triangle"></img>
                <Move mname ="paper" src="./Images/icon-paper.svg" play={handlePlay} type={"paper_container"} pos={"paper_pos"}></Move>
                <Move mname ="scissors" src="./Images/icon-scissors.svg" play={handlePlay} type={"scissors_container"} pos={" scissors_pos"}></Move>
                <Move mname ="rock" src="./Images/icon-rock.svg" play={handlePlay} type={"rock_container"} pos={" rock_pos"}></Move>
              </div>
            </div>
          }
            { playing &&
              <div className="play_div">
                  <div className="play_header">
                    <h2>You Picked</h2>
                    <h2>Computer Picked</h2>
                  </div>
                  <div className="play_section">
                      <Move src={pickImg} type={moveType}></Move>
                      <div className="play_stats">
                        <h2>{stats}</h2>
                        <button className="again-btn" onClick={()=>setPlaying(false)}>Play Again</button>
                      </div>
                      <Move src={randImg} type={randmoveType}></Move>
                  </div>
              </div>
            }
          
          {
            showRules && <div className="rule_div">
              <div className="rule_container">
              <div className="rule_header"> 
                  <h2>Rules</h2>
                  <img src="./Images/icon-close.svg" onClick={handleRule} alt="close"></img>
                </div>
                <img className="rule-img" src="./Images/rules-modal.jpg" alt="rule"></img>
              </div>
            </div>
          }
          <button className="rule-btn" onClick={handleRule}>Rules</button>
        </div>
    </div>
  );
}

export default Rps;
