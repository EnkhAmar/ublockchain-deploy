import React from "react";

function Card({ image, title, subTitle }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h1 className="card-title text-bold">{title}</h1>
            <h2 className="card-sub-title">{subTitle}</h2>
        </div>
    );
}

export default Card;
