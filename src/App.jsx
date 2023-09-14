import React, { useState } from 'react';
import './index.css'; // Import your CSS file with color classes

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default Picker;
