import React from 'react'
import './Popup.scss';
import {Ptw} from '../context/PtwContext';
import {Box, Button, useTheme} from '@mui/material';
import { tokens } from '../theme/theme';
import Progress from '../progress/Progress'


export default function Popup(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


  let theUsedContext = React.useContext(Ptw);
  let {number, description} = theUsedContext.ptwState.ptw[theUsedContext.ptwState.ptwId];
  let popupValue = 
  (
    <Box className='popup__container'>
      <Box className='popup__window' sx={{background:colors.primary[500],color: colors.blueAccent[500]}}>
        <Button className='popup__close' onClick={
          () => {
            theUsedContext.dispatch ({type: "CLOSE__POPUP", ptwId: 0})
          }
        }>close</Button>

        <h3>PTW No.{number}</h3>
        <span>{description}</span>

        <Box position={"absolute"} bottom={"40%"} left={"22%"} width={"80%"}>
          <Progress />
        </Box>

      </Box>      
    </Box>
  )

  return (
    <>
      {
        theUsedContext.ptwState.popupShow && popupValue
      }
    </>
  )
}