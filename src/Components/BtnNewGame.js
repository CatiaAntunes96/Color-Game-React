import React from "react";
import "../Style/NewGameBtn.css"

const BtnNewGame = ({ click }) => {

    return(
    <div className="btn-newGame">
        <button type="button" onClick={click} className="btn-new">New game</button>
    </div>
    )}

export default BtnNewGame;