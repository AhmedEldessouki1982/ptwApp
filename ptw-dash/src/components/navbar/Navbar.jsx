import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faInfoCircle , faUserNinja, faBars , faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../SearchBar/SearchBar';
import {Box, TextField, useTheme} from '@mui/material';
import { tokens } from '../theme/theme';
import { height, padding } from '@mui/system';


export default function Navbar () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    return (
        <>
            <Box 
            display={"flex"}
            width = {"100hv"}
            height = {"3rem"}
            justifyContent = {"space-between"}
            alignItems = {"center"}
            sx = {{
                backgroundColor: colors.primary[500]
            }}>
                <TextField
                label = {"search ..."}
                sx = {{
                    height: "1rem",
                    padding: "0",
                }}
                />

                <Box 
                display = {"flex"}
                width = {"15rem"}
                justifyContent = {"space-between"}
                fontSize = {"25px"}
                padding = {"10px"}
                >
                    <FontAwesomeIcon icon= { faFloppyDisk } className = "navbar__container__icon"/>
                    <FontAwesomeIcon icon= { faHome } className = "navbar__container__icon"/>
                    <FontAwesomeIcon icon= { faInfoCircle } className = "navbar__container__icon"/>
                    <FontAwesomeIcon icon= { faUserNinja } className = "navbar__container__icon"/>
                    <FontAwesomeIcon icon= { faBars } className = "navbar__container__icon"/>
                </Box>
            </Box>
        </>
    )
}