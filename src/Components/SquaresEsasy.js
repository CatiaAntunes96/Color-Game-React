import React from "react";
import Square from "./Square";

const SquaresEasy = ({colors}) => {

    return(
        <div>
            {colors.map((color, i) => (
                <Square key= {i + 1} styleColor={color}/>
            ))}
        </div>
    )
}


export default SquaresEasy;