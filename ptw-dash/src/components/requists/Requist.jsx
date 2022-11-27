import React from 'react';
import '../requists/requist.scss';
import {Ptw} from '../context/PtwContext';

import {Box, useTheme} from '@mui/material';
import { tokens } from '../theme/theme';

export default function Requist () {
    let theUsedContext = React.useContext(Ptw);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    let statusThemes = {
        valid: "green",
        notValid: "red",
    }

    return (
        <Box className = "requist__container__area" sx={{color:"black",  background: colors.primary[500]}}>
       
            <Box className='requist__container' sx={{color:"black",  background: colors.primary[500]}}>
                {
                    theUsedContext.ptwState.ptw.sort(
                        (b,a) => a.number - b.number
                    ).map(
                        (ptw,i) => (
                            <Box key = {ptw.number} className='table__row__container' sx={{background:colors.primary[500],color: colors.blueAccent[500]}}>
                                <Box className='ptw__data' mb={"5px"}>{ptw.number}</Box>
                                <Box className='ptw__data' mb={"5px"}>{ptw.type}</Box>
                                <Box className='ptw__data' mb={"5px"}>{ptw.authorized}</Box>
                                <Box className='ptw__kks' mb={"5px"}>{ptw.location}</Box>
                                <Box className='ptw__data' mb={"5px"}>{ptw.department}</Box>
                                <Box className='ptw__accept'>
                                {
                                    ptw.valid? 
                                    <button style = {{background: statusThemes.valid}}>Valid</button>:
                                    <button style = {{background: statusThemes.notValid}}>closed</button>
                                }
                                </Box>
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
                            </Box>
                        )
                    )
                }
            </Box>
        </Box>
    )
}