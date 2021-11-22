import React from "react";
import arrow from "../assets/white-arrow.png";

const Arrow = ({ id }) => {
    return (
        <div className="bottom-arrow">
            <a href={id}>
                <img className="down-arrow bounce" src={arrow} alt="next" />
            </a>
        </div>
    );
};

export default Arrow;
