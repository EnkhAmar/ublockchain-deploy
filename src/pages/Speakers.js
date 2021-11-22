import React from "react";

import Arrow from "../components/Arrow";
import Card from "../components/Card";
import speaker1 from "../assets/speakers/speaker1.jpg";
import speaker2 from "../assets/speakers/speaker2.jpg";
import speaker3 from "../assets/speakers/speaker3.jpg";
import InfiniteCarousel from "react-leaf-carousel";

const Speakers = ({ data }) => {
    const speakers = data.speakers;

    const breakpoints = [
        {
            breakpoint: 1380,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                slidesSpacing: 50,
            },
        },
        {
            breakpoint: 920,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                slidesSpacing: 50,
            },
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    return (
        <div className="speakers-container">
            <h1 className="speakers-title">
                MEET THE <span className="text-bold">SPEAKERS</span>
            </h1>
            <div className="carousel-speakers container">
                <InfiniteCarousel
                    breakpoints={breakpoints}
                    arrows={false}
                    slidesSpacing={60}
                    slidesToScroll={1}
                    slidesToShow={3}
                >
                    <Card
                        image={speaker1}
                        title={speakers[0].name}
                        subTitle={speakers[0].description}
                    />
                    <Card
                        image={speaker2}
                        title={speakers[1].name}
                        subTitle={speakers[1].description}
                    />
                    <Card
                        image={speaker3}
                        title={speakers[2].name}
                        subTitle={speakers[2].description}
                    />
                    {/* <Card
                        image={speaker1}
                        title="Michael Madden"
                        subTitle="CEO and Founder of Ronoc, Teneo Capital, 
        XacBank, Renaissance Capital"
                    />
                    <Card
                        image={speaker2}
                        title="Gantig Bayarmagnai"
                        subTitle="CEO of IHC and Chairman of
        Fintech and Blockchain Council of Mongolia"
                    /> */}
                </InfiniteCarousel>
            </div>
            <Arrow id="#features" />
        </div>
    );
};

export default Speakers;
