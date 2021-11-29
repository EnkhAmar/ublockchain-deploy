import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

import Arrow from "../components/Arrow";

import stPartner1 from "../assets/features/live.png";
import stPartner2 from "../assets/features/wrc.png";
import sponsor1 from "../assets/features/ihc.png";
import sponsor2 from "../assets/features/xmeta.png";
import sponsor3 from "../assets/features/storepay.png";
import sponsor4 from "../assets/features/wp.png";
import mePartner1 from "../assets/features/gogo.png";
import mePartner2 from "../assets/features/ikon.png";

const Features = () => {
    const breakpoints = [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                slidesSpacing: 10,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                slidesSpacing: 10,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
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
                            slidesToShow={4}
                            pauseOnHover={true}
                        >
                            <img
                                alt="org1"
                                src={sponsor1}
                                className="sponsor"
                            />
                            <img
                                alt="org2"
                                src={sponsor2}
                                className="sponsor"
                            />
                            <img
                                alt="org3"
                                src={sponsor3}
                                className="sponsor"
                            />
                            <img
                                alt="org4"
                                src={sponsor4}
                                className="sponsor"
                            />
                        </InfiniteCarousel>
                    </div>
                </div>
                <div className="features-content">
                    <h1 className="features-title">
                        STRATEGIC <span className="text-bold">PARTNERS</span>
                    </h1>
                    <div className="carousel-features1">
                        <img
                            alt="partner1"
                            className="partner"
                            src={stPartner1}
                        />

                        <img
                            alt="partner2"
                            className="partner"
                            src={stPartner2}
                        />
                    </div>
                </div>

                <div className="features-content">
                    <h1 className="features-title">
                        MEDIA <span className="text-bold">PARTNERS</span>
                    </h1>
                    <div className="carousel-features1">
                        <img
                            alt="partner1"
                            className="partner"
                            src={mePartner1}
                        />

                        <img
                            alt="partner2"
                            className="partner"
                            src={mePartner2}
                        />
                    </div>
                </div>
            </div>
            <Arrow id="#countries" />
        </div>
    );
};

export default Features;
