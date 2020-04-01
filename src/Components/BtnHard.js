import React from "react";
import "../Style/HardBtn.css";

const BtnHard = ({ toogle, disabled }) => {
    

    return(
        <div>
            <button type="button" onClick={toogle} disabled={disabled} className="btn-hard">Hard</button>
        </div>
    )
}

export default BtnHard;