import React from 'react';
import '../progressbars/progressbars.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Progressbars () {
    let value = 70;
    let minval = 0;
    let maxVal = 200;
    let title = 'open/closed';
    return (
        <>
            <div className='progressbars__container'>
                <CircularProgressbar
                className="chart"
                value = {value}
                minValue = {minval}
                maxValue = {maxVal}
                text = {`${value}item` }
                 />
                <span>{title}</span>
            </div>
        </>
    )
}