import React, {useState} from "react";
import BtnNewGame from "./BtnNewGame";
import BtnEasy from "./BtnEasy";
import SquaresEasy from "./SquaresEsasy";
import BtnHard from "./BtnHard";
import SquaresHard from "./SquaresHard";


const BtnContainer = () => {

    const [spanText, setSpanText] = useState("");
    const [displayEasy, setDisplayEasy] = useState(false);
    const [displayHard, setDisplayHard] = useState(false);
    const [color, setColor] = useState([]);
    
    const newGame = () => {
        setSpanText("Choose your level");
        setDisplayEasy(false);
        setDisplayHard(false);
    }
    
    const visibilityEasy = () => {
        setSpanText("")
        setDisplayEasy(true);
        setColor(generateRandomColor(3));     
    }
    
    const visibilityHard = () => {
        setSpanText("");
        setDisplayEasy(false);
        setDisplayHard(true)
    }
    
    const generateRandomColor = (num) => {
        let listColors = [];
        for (let i = 0; i < num; i++) {
          listColors.push(randomColor());
        }
        return listColors
      }
      //Geneartes one color at time
    const randomColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r +", " + g + ", " + b +")";
      }
    
    
    const squares_easy = <SquaresEasy color={color}/>
    const squares_hard = <SquaresHard />
    const div = <div></div>
    
    return(
        <div>
        <div className="btn-container">
        <BtnNewGame click={newGame}/>
        <BtnEasy toogle={visibilityEasy} />
        <BtnHard toogle={visibilityHard} />
        </div>
        <div>
        <span className="choose-level">{spanText}</span>
        {displayEasy === true ? squares_easy : div}
        {displayHard === true ? squares_hard : div}
        </div>
        </div>
        )
    }
    
    export default BtnContainer;