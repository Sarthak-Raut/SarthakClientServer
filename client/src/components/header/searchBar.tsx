import React from 'react';
import '../../assets/style/global.css'
import '../../assets/style/common.css'
import '../../assets/style/header.css'
import { ReactComponent as Search } from '../../assets/icon/search.svg';

function SearchBar() {
    return(
      <div className="search-box">
          <select className="search-dropdown">
              <option value="all">All</option>
              <option value="fiction">Fiction</option>
              <option value="classic">Classic</option>
              <option value="thriller">Thriller</option>
          </select>
          <div className="divider-vertical"></div>
          <input type="text" className="search-input" placeholder="find the book you like..."/>
          <div className="search-button">
              <Search width={30} height={30}/>
          </div>
      </div>
    );
}

export default SearchBar