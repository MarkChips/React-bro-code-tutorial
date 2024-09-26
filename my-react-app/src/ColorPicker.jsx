import React, { useState } from 'react';

function ColorPicker() {

    const [color, setColor] = useState('#fff');

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className='color-picker-container'>
            <h1>Colour Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Colour: {color}</p>
            </div>
            <label htmlFor="">Select a Colour:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker;