import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

import Arrow from "../components/Arrow";
import Card from "../components/Card";
import speaker1 from "../assets/speakers/Adam S. Tracy Attorney Consultant in Crypto and Blockchain Policy.png";
import speaker2 from "../assets/speakers/Gabit Bazar Chairman of Infinite Solutions.jpg";
import speaker3 from "../assets/speakers/Gantig Bayarmagnai.jpg";
import speaker4 from "../assets/speakers/Ider-Od CMO of IHC.001.png";
import speaker5 from "../assets/speakers/Khangal Nergui Founder and CEO of Store Pay.jpg";
import speaker6 from "../assets/speakers/Louis Curran Strategic Advisor and Partner of JST Capital.jpg";
import speaker7 from "../assets/speakers/Robert Palmer Head of Loyalty and Rewards Wondr Gaming.png";

// strategic partners +hippocards?

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
    const speakersImg = [
        speaker1,
        speaker2,
        speaker3,
        speaker4,
        speaker5,
        speaker6,
        speaker7,
    ];

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
                    incrementalSides={true}
                >
                    {speakers.map((speaker, index) => {
                        return (
                            <Card
                                key={index}
                                image={speakersImg[index]}
                                title={speaker.name}
                                subTitle={speaker.description}
                            />
                        );
                    })}
                </InfiniteCarousel>
            </div>
            <Arrow id="#features" />
        </div>
    );
};

export default Speakers;
