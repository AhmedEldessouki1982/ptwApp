import React from 'react'
import './Popup.scss';
import {Ptw} from '../context/PtwContext';

export default function Popup(props) {
  let theUsedContext = React.useContext(Ptw);
  let {number, description} = theUsedContext.ptwState.ptw[theUsedContext.ptwState.ptwId]
  let popupValue = 
  (
    <div className='popup__container'>
      <div className='popup__window'>
        <button className='popup__close' onClick={
          () => {
            theUsedContext.dispatch ({type: "CLOSE__POPUP", ptwId: 0})
          }
        }>x</button>

        <h3>PTW No.{number}</h3>
        <span>{description}</span>

      </div>      
    </div>
  )

  return (
    <>
      {
        theUsedContext.ptwState.popupShow && popupValue
      }
    </>
  )
}