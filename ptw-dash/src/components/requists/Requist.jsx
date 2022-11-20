import React from 'react';
import '../requists/requist.scss';
import {Ptw} from '../context/PtwContext';

export default function Requist () {
    let theUsedContext = React.useContext(Ptw);
    
    let statusThemes = {
        valid: "green",
        notValid: "red",
    }

    return (
        <div className = "requist__container__area">
            <div className='requist__container'>
                {
                    theUsedContext.ptwState.ptw.sort(
                        (b,a) => a.number - b.number
                    ).map(
                        (ptw,i) => (
                            <span key = {ptw.number} className='table__row__container'>
                                <span className='ptw__data'>{ptw.number}</span>
                                <span className='ptw__data'>{ptw.type}</span>
                                <span className='ptw__data'>{ptw.authorized}</span>
                                <span className='ptw__kks'>{ptw.location}</span>
                                <span className='ptw__data'>{ptw.department}</span>
                                <span className='ptw__accept'>
                                {
                                    ptw.valid? 
                                    <button style = {{background: statusThemes.valid}}>Valid</button>:
                                    <button style = {{background: statusThemes.notValid}}>closed</button>
                                }
                                </span>
                                {<span className='ptw__reject'>
                                    <button onClick={()=> {
                                        theUsedContext.dispatch({type:"PTW_CLOSE", ptwId: i})
                                    }}>change</button>
                                </span>}
                                <button className='ptw__info' onClick={
                                    ()=> {
                                        theUsedContext.dispatch({type:"SHOW_POPUP" , ptwId: i})
                                    }
                                }>i</button>
                            </span>
                        )
                    )
                }
            </div>
        </div>
    )
}