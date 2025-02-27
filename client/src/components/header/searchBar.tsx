import React, {useState} from 'react';
import '../../assets/style/global.css'
import '../../assets/style/common.css'
import '../../assets/style/header.css'
import { ReactComponent as Search } from '../../assets/icon/search.svg';
import {useDebounceValue} from "../../utils/UseDebounceValue";

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounceValue(searchTerm, 600);

    React.useEffect(() => {
        console.log('API call with:', debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    return(
      <div className="search-box">
          <select className="search-dropdown">
              <option value="all">All</option>
              <option value="fiction">Fiction</option>
              <option value="classic">Classic</option>
              <option value="thriller">Thriller</option>
          </select>
          <div className="divider-vertical"></div>
          <input
              type="text"
              className="search-input"
              placeholder="find the book you like..."
              onChange={event => setSearchTerm(event.target.value)}
          />
          <div className="search-button">
              <Search width={30} height={30}/>
          </div>
      </div>
    );
}

export default SearchBar