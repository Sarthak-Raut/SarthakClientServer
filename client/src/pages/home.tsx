import React from 'react';
import '../assets/style/global.css'
import '../assets/style/home/home.css'

import FeaturedBooks from "../components/home/FeaturedBooks";
import BestSellers from "../components/home/BestSellers";
import MainText from "../components/home/MainText";

function Home() {

    return(
        <div className="home-grid">
            <div className="flex-row-home">
                <MainText/>
                <FeaturedBooks/>
            </div>
            <BestSellers/>
        </div>
    );
}

export default Home