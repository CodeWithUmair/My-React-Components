import React, { useState, useEffect } from "react";
import { randomColor } from "../../utils";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleCreateRandomHexColor = () => {
    // #ffffff
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  };
  const handleCreateRandomRGBColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRGBColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRGBColor
          }
        >
          Generate Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
          <div>{color}</div>
        </div>
      </div>
    </>
  );
}
