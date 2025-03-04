import '../../assets/style/home/home.css'
import '../../assets/style/header.css'
import { ReactComponent as Tree } from '../../assets/icon/background_tree.svg';
import {Link} from "react-router-dom";
import React from "react";

function MainText() {
    return (
        <div className="flex-grid-home">
            <div className="flex-container-home">
                <div className="flex-row" style={{alignContent:"start"}}>
                    <Tree style={{marginBottom: "0px", marginLeft:"0vw", width: "auto", height: "10vh"}}/>
                    <h1 className="home-find-title">Find Your</h1>
                </div>
                <div className="flex-row">
                    <h1 className="home-find-title" style={{marginTop:"-0vh", marginLeft:"-5px"}}>Next Book</h1>
                </div>
            </div>
            <div className="flex-container-home" style={{alignItems:"start"}}>
                <p className="home-find-sub" style={{marginTop:"20px"}}>Step into a space where the right book finds you.</p>
                <p className="home-find-sub" style={{marginTop:"-0.2vh"}}>Browse shelves filled with stories. Find the story that
                    speaks to you.</p>
            </div>
            <div className="flex-row">
                <Link to="/categories">
                    <button className="shop-now-button">
                        Shop Now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default MainText;