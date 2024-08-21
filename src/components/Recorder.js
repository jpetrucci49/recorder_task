import React, { useState } from 'react';
import CustomButton from './CustomButton';

const Recorder = (props) => {
    /*
        Recorder component will store the state of the recording, and playback to be passed down through each button so that buttons can cause effects on each other.
        Stretch goal: include some form of a playback or progress tracker to be included in the Recorder. 
    */

    const [active, setActive] = useState('');

    return (
        <div className="button-container">
            <CustomButton active={active === 'square'} setActive={setActive} symbol="square" color="#faaf90"/>
            <CustomButton active={active === 'circle'} setActive={setActive} symbol="circle" color="#69d06d"/>
            <CustomButton active={active === 'play'} setActive={setActive} symbol="play" color="#ac2020"/>
        </div>
    )
}

export default Recorder;