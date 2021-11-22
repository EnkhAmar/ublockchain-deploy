import React from "react";
import ae from "../assets/flags/united-arab-emirates.png";
import bb from "../assets/flags/barbados.png";
import bg from "../assets/flags/bulgaria.png";
import ch from "../assets/flags/switzerland.png";
import de from "../assets/flags/germany.png";
import gb from "../assets/flags/united-kingdom.png";
import ie from "../assets/flags/ireland.png";
import ind from "../assets/flags/india.png";
// import kr from "../assets/flags/south-korea.png";
// import mt from "../assets/flags/malta.png";
// import ru from "../assets/flags/russia.png";
// import se from "../assets/flags/sweden.png";
// import sg from "../assets/flags/singapore.png";
// import us from "../assets/flags/united-states.png";

import logo from "../assets/logos/ublockchain-white-logo.png";

// https://codepen.io/funxer/pen/Zvjebx

// facebook, ig, youtube, twitter

const Countries = () => {
    return (
        <>
            <div className="countries-container container ">
                <h1 className="features-title" style={{ padding: "10vh 0" }}>
                    POWERFUL<span className="text-bold"> INTERNATIONAL </span>
                    PRESENCE
                </h1>
                <p className="desc">
                    With an array of international tech companies and
                    trailblazing speakers confirmed, Future Blockchain Summit is
                    set to unite all corners of the Blockchain and Crypto
                    ecosystem.
                </p>

                <div className="flags-container">
                    <img src={ae} alt="ae" className="flag" />
                    <img src={bb} alt="bb" className="flag" />
                    <img src={bg} alt="bg" className="flag" />
                    <img src={ch} alt="ae" className="flag" />
                    <img src={de} alt="ae" className="flag" />
                    <img src={gb} alt="ae" className="flag" />
                    <img src={ie} alt="ae" className="flag" />
                    <img src={ind} alt="ae" className="flag" />
                    {/* <div className="break" />
                        <img src={kr} alt="ae" className="flag" />
                        <img src={mt} alt="ae" className="flag" />
                        <img src={ru} alt="ae" className="flag" />
                        <img src={se} alt="ae" className="flag" />
                        <img src={sg} alt="ae" className="flag" />
                        <img src={us} alt="ae" className="flag" /> */}
                </div>
            </div>
            <footer>
                <div className="footer-container">
                    <div>
                        <p>Follow on</p>
                        <a
                            className="social-link"
                            href="https://www.facebook.com/UBlockchain.Global.Summit"
                            target="_blank"
                            id="fb"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="facebook"
                                className="svg-inline--fa fa-facebook fa-w-16"
                                role="img"
                                viewBox="0 0 512 512"
                            >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                        </a>
                        <a
                            className="social-link"
                            href="https://twitter.com/Ublockchain_"
                            target="_blank"
                            id="tw"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="twitter"
                                className="svg-inline--fa fa-twitter fa-w-16"
                                role="img"
                                viewBox="0 0 512 512"
                            >
                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                        </a>
                        <a
                            className="social-link"
                            href="https://www.instagram.com/ublockchain.global.summit/"
                            target="_blank"
                            id="ig"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                className="svg-inline--fa fa-instagram fa-w-14"
                                role="img"
                                viewBox="0 0 448 512"
                            >
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </a>
                        <a
                            className="social-link"
                            href="https://www.youtube.com/channel/UCwhjLthHLXyPFk8xAC0oV6w"
                            target="_blank"
                            id="yt"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="youtube"
                                className="svg-inline--fa fa-youtube fa-w-18"
                                role="img"
                                viewBox="0 0 576 512"
                            >
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                            </svg>
                        </a>
                        <a
                            className="social-link"
                            href="mailto:info@ublockchainsummit.com"
                            target="_blank"
                            id="em"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="at"
                                className="svg-inline--fa fa-at fa-w-16"
                                role="img"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z" />
                            </svg>
                        </a>
                    </div>

                    <img src={logo} alt={logo} className="footer-img"></img>
                </div>
            </footer>
        </>
    );
};

export default Countries;
