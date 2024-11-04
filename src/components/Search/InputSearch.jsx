import { useState, useEffect } from 'react';
import style from './search.module.css';
import { searchProduct } from '../../api/api.jsx'; 

import { Link } from "react-router-dom";


const InputSearch = () => {
  const [params, setParams] = useState({type: '', subtype: '', page: '', per_page:'',  search: ''});
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const inputChange = (e) => {
    setSearchString(e.target.value);
    setParams((prevParams) => ({ ...prevParams, search: e.target.value }));
  };

  useEffect(() => {
    if (searchString) {
     searchProduct(params) 
      .then(data => setSearchResults(data))
      .catch(error => console.error('Error searching:', error));
    } else {
     setSearchResults([]); 
    }
   }, [searchString, params.page, params.per_page]);

  return (
    <>
      <div className={style.search__wrapper}>
        <input
          onChange={inputChange}
          className={style.search__input}
          placeholder='Поиск'
        />



        {searchResults.length > 0 && searchString.length > 0 && ( 
            <div className={style.search__results}>
                {searchResults.map((item, idx) => ( 
                <option key={idx} value={item.url}> 
                    <Link to={item.url}>{item.title}</Link>
                </option>
                ))}
            </div>
        )}
      </div>

     
    </>
  );
};

export default InputSearch;

