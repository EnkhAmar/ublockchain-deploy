import React from "react";

import Arrow from "../components/Arrow";
import Card from "../components/Card";
import speaker0 from "../assets/speakers/Gantig Bayarmagnai.jpg";
import speaker1 from "../assets/speakers/Gabit Bazar Chairman of Infinite Solutions.jpg";
import speaker2 from "../assets/speakers/Ider-Od CMO of IHC.001.png";
import speaker3 from "../assets/speakers/Robert Palmer Head of Loyalty and Rewards Wondr Gaming.png";
import speaker4 from "../assets/speakers/Adam S. Tracy Attorney Consultant in Crypto and Blockchain Policy.png";
import speaker5 from "../assets/speakers/Khangal Nergui Founder and CEO of Store Pay.jpg";
import speaker6 from "../assets/speakers/Louis Curran Strategic Advisor and Partner of JST Capital.jpg";

import InfiniteCarousel from "react-leaf-carousel";

// asiad hasagdana
// countries mongolia, brazil, usa, uk, sg, ireland, sk, sweden
// strategic partners +hippocards?

//

const Speakers = ({ data }) => {
    const breakpoints = [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                slidesSpacing: 50,
            },
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                slidesSpacing: 50,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    const speakers = data.speakers;

    return (
        <div className="speakers-container">
            <h1 className="speakers-title">
                MEET THE <span className="text-bold">SPEAKERS</span>
            </h1>
            <div className="carousel-speakers container">
                <InfiniteCarousel
                    breakpoints={breakpoints}
                    // arrows={false}
                    autoCycle={true}
                    cycleInterval={5000}
                    pauseOnHover={true}
                    slidesSpacing={60}
                    slidesToScroll={1}
                    slidesToShow={3}
                >
                    <Card
                        image={speaker0}
                        title={speakers[0].name}
                        subTitle={speakers[0].description}
                    />
                    <Card
                        image={speaker1}
                        title={speakers[1].name}
                        subTitle={speakers[1].description}
                    />
                    <Card
                        image={speaker2}
                        title={speakers[2].name}
                        subTitle={speakers[2].description}
                    />
                    <Card
                        image={speaker3}
                        title={speakers[3].name}
                        subTitle={speakers[3].description}
                    />
                    <Card
                        image={speaker4}
                        title={speakers[4].name}
                        subTitle={speakers[4].description}
                    />
                </InfiniteCarousel>
            </div>
            <Arrow id="#features" />
        </div>
    );
};

export default Speakers;
