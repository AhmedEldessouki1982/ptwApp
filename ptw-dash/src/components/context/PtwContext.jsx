import React from 'react';
import { data } from '../../utils/data.js';

export const Ptw = React.createContext();
let initPtwState = {
    ...data,
    popupShow: false,
    ptwId: 0
}

let reducer = (ptwState,action) => {
    switch (action.type) {
        case "PTW_CLOSE":
            return {
                ...ptwState,
                ptw: [...ptwState.ptw.slice(0,action.ptwId),
                ...ptwState.ptw.slice(action.ptwId+1,ptwState.ptw.length+1),
                {...ptwState.ptw[action.ptwId],valid:!ptwState.ptw[action.ptwId].valid}]
            }
        case "SHOW_POPUP":
            return {
                ...ptwState, popupShow: !ptwState.popupShow, ptwId: action.ptwId        
            }
        case "CLOSE__POPUP":
            return {
                ...ptwState, popupShow: !ptwState.popupShow, ptwId: action.ptwId
            }
        case "SEARCH__BAR":
            return {
            ...ptwState,
            ptw: [
                ...ptwState.ptw.filter(
                    ({authorized}) => authorized.indexOf(action.filterValue) > -1 
                )
            ]
        }  
        default:
            throw new Error();
    }
}
export default function PtwContext (props) {
    let [ptwState , dispatch] = React.useReducer(reducer,initPtwState);
    let globalPtwState = {
        ptwState,
        dispatch
    }
    
    return (
        <Ptw.Provider value={globalPtwState}>
            {props.children}
        </Ptw.Provider>
    )
}