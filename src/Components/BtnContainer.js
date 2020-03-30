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

    const newGame = () => {
        setSpanText("Choose your level");
        setDisplayEasy(false);
        setDisplayHard(false);
    }

    const visibilityEasy = () => {
        setSpanText("")
        setDisplayEasy(true);
    }

    const visibilityHard = () => {
        setSpanText("");
        setDisplayHard(true)
    }

    const squares_easy = <SquaresEasy />
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