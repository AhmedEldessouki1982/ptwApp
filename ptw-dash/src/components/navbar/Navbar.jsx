import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faInfoCircle , faUserNinja, faBars , faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SearchBar/SearchBar';

export default function Navbar () {

    return (
        <>
            <div className='navbar__container'>
                <SearchBar className="SearchBar"/>
                <FontAwesomeIcon icon= { faFloppyDisk } className = "navbar__container__icon"/>
                <FontAwesomeIcon icon= { faHome } className = "navbar__container__icon"/>
                <FontAwesomeIcon icon= { faInfoCircle } className = "navbar__container__icon"/>
                <FontAwesomeIcon icon= { faUserNinja } className = "navbar__container__icon"/>
                <FontAwesomeIcon icon= { faBars } className = "navbar__container__icon"/>
            </div>
        </>
    )
}