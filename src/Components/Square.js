import React, {useState} from "react";
import "../Style/Squares.css";

const Square = ( {styleColor, start} ) => {
    const [visibility, setVisibility] = useState(true);

    const click = (e) => {
        let clickedSquare = e.target;
        let backgroundSquare = clickedSquare.style.backgroundColor;
        if (backgroundSquare === start) {
            setVisibility(true);
            document.querySelectorAll(".square").forEach(el => {
                el.style.pointerEvents = "none";
            });
            document.querySelector(".right-or-wrong-selection").innerHTML = "You win!";
            document.querySelector(".App-header").style.backgroundColor = start;
            console.log(true)
        } else {
            setVisibility(false);
            document.querySelector(".right-or-wrong-selection").innerHTML = "Try Again!";
            console.log(false)
        } 
    }

    const square =  <div className="square" style={{backgroundColor: styleColor}} onClick={click}></div>;
    const squareHidden = <div className="square"></div>;

    return(
        <div>
        {visibility === true ? square : squareHidden}
        </div>
    )
}

export default Square;