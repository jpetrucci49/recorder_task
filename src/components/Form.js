import React, { useState } from 'react';

const Form = (props) => {
  const [selectedRadio, setSelectedRadio] = useState(false)

    return (
        <form className="radio-form">
            <div>
                <textarea
                id="freeform"
                name="freeformInput"
                rows={5}
                cols={60}
                />
            </div>
            <div className="radio-buttons">
                <div className="radio">
                    <label>
                    <input type="radio" value={true} checked={selectedRadio === true} onClick={()=>setSelectedRadio(true)}/>
                    True
                    </label>
                </div>
                <div className="radio">
                    <label>
                    <input type="radio" value={false} checked={selectedRadio === false} onClick={()=>setSelectedRadio(false)}/>
                    False
                    </label>
                </div>
                <button disabled={!selectedRadio} type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;