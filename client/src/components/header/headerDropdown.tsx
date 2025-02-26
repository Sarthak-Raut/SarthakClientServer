import React from 'react';
import '../../assets/style/global.css'
import '../../assets/style/common.css'
import '../../assets/style/header.css'
import '../../assets/style/header-dropdown.css'
import { ReactComponent as ArrowDown } from '../../assets/icon/arrow-down.svg';
import {CATEGORY_TYPE} from "../../data/models/categoryType";
import {Link} from "react-router-dom";


interface HeaderDropdownButtonProps {
    name: string;
    isSelected: boolean;
}

const HeaderDropdown: React.FC<HeaderDropdownButtonProps> = ({ name, isSelected }) => {
    return (
        <div className="container">
            <div className="dropdown">
                <button className="dropbtn" style={isSelected ? {fontWeight:"bold"} : {fontWeight:"normal"} }>{name}
                    <ArrowDown style={{width:20, height:20}}/>
                </button>
                <div className="dropdown-content">
                    <Link to={`/categories?type=${CATEGORY_TYPE.ALL}`}>All</Link>
                    <Link to={`/categories?type=${CATEGORY_TYPE.FICTION}`}>Fiction</Link>
                    <Link to={`/categories?type=${CATEGORY_TYPE.CLASSIC}`}>Classic</Link>
                    <Link to={`/categories?type=${CATEGORY_TYPE.THRILLER}`}>Thriller</Link>
                    <Link to={`/categories?type=${CATEGORY_TYPE.ROMANCE}`}>Romance</Link>
                </div>
            </div>
            <div className={ isSelected ? 'divider-selected' : 'divider-none' } style={{marginRight:30}}></div>
        </div>
    );
};


export default HeaderDropdown
