import React from "react";
import "../Style/Squares.css";

const Square = ( {styleColor} ) => (
    <div className="square" style={{backgroundColor: styleColor}}></div>
)

export default Square;