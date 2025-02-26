import React from 'react';
import '../../assets/style/global.css'
import '../../assets/style/common.css'
import '../../assets/style/header.css'

interface HeaderButtonProps {
    name: string;
    isSelected: boolean;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ name, isSelected }) => {
    return (
        <div className="container">
            <button className={`button-nav ${ isSelected ? 'button-nav-selected' : '' }`} type="button">
                { name }
            </button>
            <div className={ isSelected ? 'divider-selected' : 'divider-none' }></div>
        </div>
    );
};


export default HeaderButton
