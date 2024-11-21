import { useState, useEffect } from 'react';
import style from './search.module.css';
import { searchProduct } from '../../api/api.jsx'; 

import { Link } from "react-router-dom";


const InputSearch = () => {
  const [params, setParams] = useState({ subtype: '', page: '', per_page:'100',  search: ''});
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const inputChange = (e) => {
    setSearchString(e.target.value);
    setParams((prevParams) => ({ ...prevParams, search: e.target.value }));
  };

  useEffect(() => {
    if (searchString && searchString.length >= 3) {
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
        {searchResults.length > 0 && (
          <div className={style.search__results}>
            {searchResults.map((item) => {
              if (item && item.id && item.link) {
                const isProduct = item.type === 'product';
                const linkTo = isProduct
                  ? `/react-frontend/products/${item.id}`
                  : `/react-frontend/blog/${item.id}`;
                const itemType = isProduct ? 'product' : 'post'; 

                return (
                  <Link
                    state={{ [itemType]: item }}
                    key={item.id}
                    to={linkTo}
                  >
                    {item.title.rendered}
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        )}




      </div>

     
    </>
  );
};

export default InputSearch;

