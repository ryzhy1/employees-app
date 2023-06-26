import './search-panel.scss';

import { useState } from 'react';

const SearchPanel =({ onUpdateSearch }: any) => {

    const [term, setTerm] = useState('');

    const changeUpdateSearch = (e: any): any => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearch(term)
    }


    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={term}
                onChange={changeUpdateSearch}
                />
    )
}

export default SearchPanel;