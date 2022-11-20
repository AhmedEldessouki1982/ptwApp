import React from 'react';
import '../SearchBar/searchBar.scss';
import {Ptw} from '../context/PtwContext';

export default function SearchBar () {
    let theUsedContext = React.useContext(Ptw);
    return (
        <>
            <input className='searchBar__input' 
            type="text" placeholder='Search...' 
            onChange={(e)=> {
                theUsedContext.dispatch({type: "SEARCH__BAR", filterValue: e.target.value.toString().toLowerCase()})
            }}/>
        </>
    )
}