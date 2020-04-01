import React, {useState} from "react";
import BtnNewGame from "./BtnNewGame";
import BtnEasy from "./BtnEasy";
import BtnHard from "./BtnHard";
import Square from "./Square";
import "../Style/Container.css";

function generateRandomColor (num) {
  let listColors = [];
  for (let i = 0; i < num; i++) {
    listColors.push(randomColor());
  }
  return listColors
}

function randomColor () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g + ", " + b +")";
}

function choosenColor (arr) {
  let  random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

const BtnContainer = () => {
  
  const [spanText, setSpanText] = useState("");
  const [display, setDisplay] = useState(false);
  const [colors, setColors] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [pickedColor, setPickedColor] = useState("");
  const [colorSelected, setColorSelected] = useState(false);

  const [displayBtns, setDisplayBtns] = useState(false);

  function newGame () {
    setSpanText("Choose your level");
    setDisplay(false);
    setDisabled(false);
    setPickedColor("");
    document.querySelector(".right-or-wrong-selection").innerHTML = "";
    document.querySelector(".App-header").style.backgroundColor = "white";
    setDisplayBtns(true)
  }

  function setContainerSquares (numS) {
    setSpanText("");
    setDisplay(true);
    const generatedColors = generateRandomColor(numS); 
    setColors(generatedColors);
    setPickedColor(choosenColor(generatedColors));
    setDisabled(true);
    styleColorChoosen();
    setTimeout(hiddenColor, 500);
    document.querySelector(".right-or-wrong-selection").innerHTML = "";
    setDisplayBtns(false)
  }

  function levelEasy () {
    setContainerSquares(3);
  }
 
  function levelHard () {
    setContainerSquares(6);
  }

  function styleColorChoosen () {
    setColorSelected(true);
  }

  function hiddenColor () {
    setColorSelected(false)
  }

  console.log(colors)
  console.log(pickedColor)

  const allSquares = colors.map((color, i) => (
    <Square key= {i} styleColor={color} start={pickedColor}/>))
  const div = <div></div>;
  const square = <div className="color-choosed-container">Color: <span className="little-square" style={{backgroundColor: pickedColor}}></span></div>;
  const btnsLevel = <div  className="btn-level">
    <BtnEasy toogle={levelEasy} disabled={disabled}/> 
    <BtnHard toogle={levelHard} disabled={disabled} />
    </div>
  
  return(
    <div className="main-container">
    <BtnNewGame click={newGame}/>
    <div>
    <div className="message-alert">
      {spanText} 
      {colorSelected ? square : div}
      {displayBtns === true ? btnsLevel :  div }
      <div className="right-or-wrong-selection"></div>
    </div>
    <div className="squares-container">
    {display === true ? allSquares : div}
    </div>
    </div>
    </div>
    )
  }
  
  export default BtnContainer;