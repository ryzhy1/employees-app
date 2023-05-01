import './search-panel.scss';

import { useState } from 'react';

const SearchPanel =() => {

    const [term, setTerm] = useState('');

    const onUpdateSearch = (e: any): any => {
        const term = e.target.value;
        setTerm(term);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;