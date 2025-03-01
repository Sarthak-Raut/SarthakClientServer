import React from 'react';
import '../assets/style/global.css'
import '../assets/style/home/home.css'

import FeaturedBooks from "../components/home/FeaturedBooks";

function Home() {

    return(
        <div className="home-grid">
            <div className="flex-container-home" style={{ backgroundColor: 'transparent' }}>

            </div>
            <div className="flex-container-home">
                <FeaturedBooks/>
            </div>
            <div style={{ backgroundColor: 'transparent' }}>

            </div>
        </div>
    );
}

export default Home