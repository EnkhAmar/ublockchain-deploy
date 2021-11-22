import React from 'react'
import councilLogo from '../assets/logos/council-logo.png'
import ublockhainLogo from '../assets/logos/ublockchain-white-logo.png'
import Arrow from '../components/Arrow';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-logos unselectable">
                <img className="home-logo" src={councilLogo} alt="logo" />
                <div className="home-x"></div>
                <img className="home-logo" src={ublockhainLogo} alt="logo" />
            </div>

            <h1 className="home-desc unselectable"><span className="text-bold">BLOCKCHAIN</span> AND BEYOND</h1>

            <div className="home-info">
                <h1 className="home-date text-bold">29 NOV 2021</h1>
                <h1 className="home-location">White Rock Center</h1>
            </div>
            <Arrow id={"#conferences"} />
        </div>
    )
}

export default Home
