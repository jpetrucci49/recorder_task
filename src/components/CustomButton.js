import React from 'react';

const CustomButton = (props) => {
    const labelObj = {
        square: "Stop",
        circle: "Record",
        play: "Review your recording"
    }
    return (
        <div className="button-wrapper">
            <div className="button" style={{backgroundColor: props.color}}>
                <div className={props.symbol}></div>
            </div>
            <label>{labelObj[props.symbol]}</label>
        </div>
    )
}

export default CustomButton;