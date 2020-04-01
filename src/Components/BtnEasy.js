import React from "react";
import "../Style/EasyBtn.css";

const BtnEasy = ({ toogle, disabled }) => {
    return(
        <div>
            <button type="button" onClick={toogle} disabled={disabled} className="easy-btn">Easy</button>
        </div>
    )
}

export default BtnEasy;