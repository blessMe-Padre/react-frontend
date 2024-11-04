import { useState, useEffect } from 'react';

import style from './search.module.css';

const InputSearch = () => {
    return (
        <div class={style.search__wrapper}>
            <input class={style.search__input} placeholder='Поиск' />
        </div>
    )
}

export default InputSearch;