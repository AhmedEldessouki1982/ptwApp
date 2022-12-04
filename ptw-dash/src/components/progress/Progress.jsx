import React from 'react';
import './progress.css';
import {Box, useTheme} from '@mui/material'
import { tokens } from '../theme/theme';


export default function Progress() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
        <ul className = "container">
            <li className = "steps "> refc
                <span className = "count">1</span>
            </li>

            <li className = "steps current"> hse
                <span className = "count">2</span>
            </li>

            <li className = "steps "> com
                <span className = "count">3</span>
            </li>

            <li className = "steps"> sap
                <span className = "count">4</span>
            </li>

            <li className = "steps "> loto
                <span className = "count">5</span>
            </li>
      </ul>
    </Box>
  )
}

 