import React from 'react';

const CustomButton = (props) => {

    return (
        <div className="button" style={{backgroundColor: props.color}}>
            <div className={props.symbol}></div>
        </div>
    )
}

export default CustomButton;