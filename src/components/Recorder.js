import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';

const Recorder = (props) => {
    /*
        Recorder component will store the state of the recording, and playback to be passed down through each button so that buttons can cause effects on each other.
        Stretch goal: include some form of a playback or progress tracker to be included in the Recorder. 
    */

    // state to store which button is active
    const [active, setActive] = useState('');

    // states to store record time and playtime
    const [recordTime, setRecordTime] = useState(0);
    const [playTime, setPlayTime] = useState(0);

    // states to store if recording or playing or not
    const [isRecording, setIsRecording] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // state to store if playback has reached end of recording
    const [isComplete, setIsComplete] = useState(false);

    // basic timer for recording
    useEffect(() => {
        let intervalId;
        if (isRecording) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setRecordTime(recordTime + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRecording, recordTime]);

    // basic timer for playing
    useEffect(() => {
        let intervalId;
        if (isPlaying) {
            intervalId = setInterval(() => setPlayTime(playTime + 1), 10);
            setIsComplete(playMinutes >= recordMinutes && playSeconds >= recordSeconds)
        }
        if (isComplete){
            setIsPlaying(false);
        }
        return () => clearInterval(intervalId);
    }, [isPlaying, playTime, recordTime, isComplete]);

    // Recorded and Play minutes calculation - will apply an arbitrary 60 minute record limit
    const recordMinutes = Math.floor((recordTime % 360000) / 6000);
    const playMinutes = Math.floor((playTime % 360000) / 6000);

    // Recorded and Play seconds calculation
    const recordSeconds = Math.floor((recordTime % 6000) / 100);
    const playSeconds = Math.floor((playTime % 6000) / 100);

    // Method to stop recording and playing
    const clickStop = () => {
        setIsRecording(false);
        setIsPlaying(false);
    };

    // Method to handle record clicks
    const clickRecord = () => {
        if (isRecording){
            clickStop();
        } else {
            setRecordTime(0);
            setPlayTime(0);
            setIsRecording(true);
            setIsPlaying(false);
        }
    };

    // Method to handle play clicks
    const clickPlay = () => {
        if (isRecording){
            clickStop();
        }
        if (isComplete){
            setPlayTime(0);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="recorder-container">
            <div className="button-container">
                <CustomButton active={active === 'square'} clickHandler={clickStop} setActive={setActive} symbol="square" color="#faaf90"/>
                <CustomButton active={active === 'circle'} clickHandler={clickRecord} setActive={setActive} symbol="circle" color="#69d06d"/>
                <CustomButton active={active === 'play'} clickHandler={clickPlay} setActive={setActive} symbol="play" color="#ac2020"/>
            </div>
            <div className="timer-container">
                <p className="stopwatch-time">
                    {playMinutes.toString().padStart(2, "0")}:{playSeconds.toString().padStart(2, "0")}{" / "}
                    {recordMinutes.toString().padStart(2, "0")}:{recordSeconds.toString().padStart(2, "0")}
                </p>
            </div>
        </div>
    )
}

export default Recorder;