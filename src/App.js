import React from "react";

import Conferences from "./pages/Conferences";
// import Countries from "./pages/Countries";
// import Features from "./pages/Features";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";

import dataEn from "./pages/data-en.json";
import dataMn from "./pages/data-mn.json";

function App() {
    const [language, setLanguage] = React.useState("en");

    return (
        <>
            <canvas id="can"></canvas>
            <div className="wrapper">
                <nav>
                    <div className="nav-container">
                        <ul className="nav-links">
                            <li className="home active">
                                <a href="#home">Home</a>
                            </li>
                            <li className="conferences">
                                <a href="#conferences">Conferences</a>
                            </li>
                            <li className="speakers">
                                <a href="#speakers">Speakers</a>
                            </li>
                            <li className="features">
                                <a href="#features">Features</a>
                            </li>
                        </ul>
                        <div className="language">
                            <div
                                className={
                                    language === "mn" ? "lng-active" : ""
                                }
                                onClick={() => {
                                    setLanguage("mn");
                                }}
                            >
                                MON
                            </div>
                            <div
                                className={
                                    language === "en" ? "lng-active" : ""
                                }
                                onClick={() => {
                                    setLanguage("en");
                                }}
                            >
                                ENG
                            </div>
                        </div>
                    </div>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
                <section id="home">
                    <Home />
                </section>
                <section id="conferences">
                    <Conferences data={language === "en" ? dataEn : dataMn} />
                </section>
                <section id="speakers">
                    <Speakers data={language === "en" ? dataEn : dataMn} />
                </section>
                {/* <section id="features">
                    <Features />
                </section>
                <div id="countries">
                    <section id="features">
                        <Countries />
                    </section>
                </div> */}
            </div>
        </>
    );
}

export default App;
