import React, { useState } from 'react';

const Form = (props) => {
  const [selectedRadio, setSelectedRadio] = useState(false)

    return (
        <form className="radio-form">
            <div>
                <textarea
                id="freeform"
                ref={props.textAreaRef}
                name="freeformInput"
                rows={5}
                cols={60}
                />
            </div>
            <div>Is this your final answer?</div>
            <div className="radio-buttons">
                <div className="radio">
                    <input id="true" type="radio" value={true} checked={selectedRadio === true} onChange={()=>setSelectedRadio(true)}/>
                    <label htmlFor="true">True</label>
                </div>
                <div className="radio">
                    <input id="false" type="radio" value={false} checked={selectedRadio === false} onChange={()=>setSelectedRadio(false)}/>
                    <label htmlFor="false">False</label>
                </div>
                <button disabled={!selectedRadio} type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;