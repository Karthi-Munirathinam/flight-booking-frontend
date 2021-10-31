import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './Loading.css';
import { orange } from '@mui/material/colors';

function Loading() {
    return (
        <div className="loading-container">
            <div className="loader-container">
                <CircularProgress sx={{ color: orange[500] }} />
            </div>
        </div>
    )
}

export default Loading
