import React from 'react';
import CustomButton from './CustomButton';

const Recorder = (props) => {
    return (
        <div className="button-container">
            <CustomButton symbol="square" color="#faaf90"/>
            <CustomButton symbol="circle" color="#69d06d"/>
            <CustomButton symbol="play" color="#ac2020"/>
        </div>
    )
}

export default Recorder;