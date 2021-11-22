import React from "react";
import growthImg from "../assets/conferences/growth.png";
import profitImg from "../assets/conferences/profits.png";
import walletImg from "../assets/conferences/wallet.png";
import arrow from "../assets/white-arrow.png";
import VerticalCarousel from "../components/VerticalCarousel";

import "./demo.css";

// https://github.com/sahilverma2209/react-wheelpicker

const icons = [
    {
        icon: profitImg,
        description: "Blockchain as an alternative investment",
    },
    {
        icon: growthImg,
        description: "Blockchain beyond Crypto",
    },
    {
        icon: walletImg,
        description: "Blockchain in finance",
    },
];

const Conferences = ({ data }) => {
    const paragraphs = data.paragraphs;
    return (
        <div className="conferences-container container">
            <div className="conf-icons-box">
                {icons.map((item, index) => (
                    <div className="conferences-icon unselectable" key={index}>
                        <img src={item.icon} alt={item.description} />
                        <br />
                        <p className="icon-desc">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="conf-paras">
                {paragraphs.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>

            <VerticalCarousel
                data={data.slides}
                leadingText={data.leadingText}
                className="unselectable"
            />

            <br />
            <br />
            <br />

            <div className="conferences-arrow">
                <a href="#speakers">
                    <img
                        src={arrow}
                        alt="down-arrow"
                        className="bounce unselectable down-arrow"
                        style={{
                            position: "absolute",
                            marginBottom: 20,
                        }}
                    />
                </a>
            </div>
            <br />
        </div>
    );
};

export default Conferences;
