"use client";

import { useGlobalTheme } from "@/lib/utils";
import React, { useState, ChangeEvent, useEffect } from "react";

// Define the types for RGB and HSL colors
interface RGB {
  r: number;
  g: number;
  b: number;
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

// Function to convert hex to RGB
const hexToRgb = (hex: string): RGB => {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

// Function to convert RGB to HSL
const rgbToHsl = (r: number, g: number, b: number): HSL => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  };
};

const ColorConverter: React.FC = () => {
  const [hexColor, setHexColor] = useState<string>("#84d455");
  const rgb: RGB = hexToRgb(hexColor);
  const hsl: HSL = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // useEffect(() => {
  //   const css = useGlobalTheme(hsl.h, hsl.s, hsl.l);
  //   const style = document.createElement("style");
  //   style.innerHTML = css;
  //   document.head.appendChild(style);

  //   return () => {
  //     document.head.removeChild(style);
  //   };
  // }, [hsl]);

  const css = useGlobalTheme(hsl.h, hsl.s, hsl.l);

  const handleHexColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHexColor(e.target.value);
  };

  return (
    <div className="">
      <input type="text" value={hexColor} onChange={handleHexColorChange} />
      <p>
        Converted HSL: {hsl.h.toFixed(2)}, {hsl.s.toFixed(2)}%,{" "}
        {hsl.l.toFixed(2)}%
        <div
          style={{
            backgroundColor: `hsl(${hsl.h.toFixed(2)}, ${hsl.s.toFixed(2)}%, ${hsl.l.toFixed(2)}%)`,
          }}
          className="rounded-full p-4 cursor-pointer"
        />
        <p>{css}</p>
      </p>
    </div>
  );
};

export default ColorConverter;
