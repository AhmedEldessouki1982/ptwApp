import React from 'react';
import '../cards/cards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cards ({ title, icon, color}) {
    return (
        <>
            <div className='card__container' style = { {backgroundColor: color } } >
                <div className='card__container__left'>
                    <FontAwesomeIcon icon={ icon } />
                </div>

                <div className='card__container__right'>
                    <span> { title } </span>
                    <span className='card__container__right__value'>15</span>
                </div>
            </div>
        </>
    )
}