import React from "react";
import Svg, { G, Path } from "react-native-svg";

function CarIcon({ color = "", size = 25 }) {
  return (
    <>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
      >
        <Path
          d="M16.01 3.32996H8.99C6.5 3.32996 5.95 4.56996 5.63 6.08996L4.5 11.5H20.5L19.37 6.08996C19.05 4.56996 18.5 3.32996 16.01 3.32996Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M22.49 20.32C22.6 21.49 21.66 22.5 20.46 22.5H18.58C17.5 22.5 17.35 22.04 17.16 21.47L16.96 20.87C16.68 20.05 16.5 19.5 15.06 19.5H9.93998C8.49998 19.5 8.28998 20.12 8.03998 20.87L7.83998 21.47C7.64998 22.04 7.49998 22.5 6.41998 22.5H4.53998C3.33998 22.5 2.39998 21.49 2.50998 20.32L3.06998 14.23C3.20998 12.73 3.49998 11.5 6.11998 11.5H18.88C21.5 11.5 21.79 12.73 21.93 14.23L22.49 20.32Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.5 8.5H3.5"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.5 8.5H20.5"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 3.5V5.5"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11 5.5H14"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.5 15.5H9.5"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.5 15.5H18.5"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
}

export default CarIcon;
