import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState();

  const divStyle = { backgroundColor: color };
  const grn = {
    borderTopRightRadius: 5,
    borderLeft: 0,
    padding: 7,
    backgroundColor: "#A5E457",
  };
  const ylw = {
    borderLeft: 0,
    borderRight: 0,
    padding: 7,
    backgroundColor: "#FFF289",
  };
  const red = {
    borderLeft: 0,
    borderRight: 0,
    padding: 7,
    backgroundColor: "#FEB389",
  };
  const blu = {
    borderTopLeftRadius: 5,
    borderRight: 0,
    padding: 7,
    backgroundColor: "#89E2FF",
  };

  return (
    <div style={divStyle}>
      <p>برگه تکلیف {color}</p>
      <button style={grn} onClick={() => setColor("#A5E457")}></button>
      <button style={ylw} onClick={() => setColor("#FFF289")}></button>
      <button style={red} onClick={() => setColor("#FEB389")}></button>
      <button style={blu} onClick={() => setColor("#89E2FF")}></button>
    </div>
  );
}
