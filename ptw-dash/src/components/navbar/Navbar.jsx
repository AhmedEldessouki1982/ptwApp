import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import {Box, IconButton, useTheme} from '@mui/material';
import { ColorModeContext, tokens } from '../theme/theme';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function Navbar () {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    let themeToggle = React.useContext(ColorModeContext);
    return (
        <>
            <Box display={"flex"} width = {"100hv"} height = {"3rem"} justifyContent = {"space-between"} alignItems = {"center"}
            sx = {{
                backgroundColor: colors.primary[500]
            }}>

            {/* search box */}
                <Box>
                    
                </Box>
                
            {/* icon box */}
                <Box mr = "15px">
                    <IconButton color = "warning" onClick={()=>{themeToggle.toggleColorMode()}}>
                        {
                            theme.palette.mode === "dark" ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)
                        }
                    </IconButton>

                    <IconButton color = "warning">
                       <AccountCircleOutlinedIcon />
                    </IconButton>

                    <IconButton color = "warning">
                       <NotificationsOutlinedIcon />
                    </IconButton>

                    <IconButton color = "warning">
                       <SettingsOutlinedIcon />
                    </IconButton>
                </Box>

            </Box>
        </>
    )
}

