import React from "react";
import "../Style/Squares.css";

const SquaresEasy = ({color}) => {

    return(
        <div>
            <div className="square" style={{backgroundColor: color[0]}}></div>
            <div className="square" style={{backgroundColor: color[1]}}></div>
            <div className="square" style={{backgroundColor: color[2]}}></div>
        </div>
    )
}


export default SquaresEasy;