import React from "react";
import logo from "../assets/logos/ublockchain-white-logo.png";

import InfiniteCarousel from "react-leaf-carousel";
import Arrow from "../components/Arrow";

const Features = () => {
    const breakpoints = [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                slidesSpacing: 15,
            },
        },
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                slidesSpacing: 10,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                slidesSpacing: 5,
            },
        },
    ];

    return (
        <div className="container">
            <div className="features-container">
                <div className="features-content">
                    <h1 className="features-title text-bold">SPONSORS</h1>
                    <div className="carousel-features">
                        <InfiniteCarousel
                            breakpoints={breakpoints}
                            autoCycle={true}
                            cycleInterval={5000}
                            slidesToScroll={1}
                            slidesSpacing={30}
                            slidesToShow={5}
                            pauseOnHover={true}
                        >
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                            <img
                                alt="org"
                                className="organization"
                                src={logo}
                            />
                        </InfiniteCarousel>
                    </div>
                </div>
                <div className="features-content">
                    <h1 className="features-title">
                        STRATEGIC <span className="text-bold">PARTNERS</span>
                    </h1>

                    <div className="carousel-features">
                        <InfiniteCarousel
                            breakpoints={breakpoints}
                            autoCycle={true}
                            cycleInterval={5000}
                            slidesToScroll={1}
                            slidesSpacing={30}
                            slidesToShow={5}
                            pauseOnHover={true}
                        >
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                        </InfiniteCarousel>
                    </div>
                </div>
                <div className="features-content">
                    <h1 className="features-title">
                        MEDIA <span className="text-bold">PARTNERS</span>
                    </h1>

                    <div className="carousel-features">
                        <InfiniteCarousel
                            breakpoints={breakpoints}
                            autoCycle={true}
                            cycleInterval={5000}
                            slidesToScroll={1}
                            slidesSpacing={30}
                            slidesToShow={5}
                            pauseOnHover={true}
                        >
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                            <img
                                alt="partners"
                                className="partner"
                                src={logo}
                            />
                        </InfiniteCarousel>
                    </div>
                </div>
            </div>
            <Arrow id="#countries" />
        </div>
    );
};

export default Features;
