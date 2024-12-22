import React from "react";
import Svg, { G, Path } from "react-native-svg";

function ReceiptIcon({ color = "", size = 25 }) {
  return (
    <>
      <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
        <Path
          d="M22.75 6.5V8.92C22.75 10.5 21.75 11.5 20.17 11.5H16.75V4.51C16.75 3.4 17.66 2.5 18.77 2.5C19.86 2.51 20.86 2.95 21.58 3.67C22.3 4.4 22.75 5.4 22.75 6.5Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M2.75 7.5V21.5C2.75 22.33 3.68998 22.8 4.34998 22.3L6.06 21.02C6.46 20.72 7.02 20.76 7.38 21.12L9.03998 22.79C9.42998 23.18 10.07 23.18 10.46 22.79L12.14 21.11C12.49 20.76 13.05 20.72 13.44 21.02L15.15 22.3C15.81 22.79 16.75 22.32 16.75 21.5V4.5C16.75 3.4 17.65 2.5 18.75 2.5H7.75H6.75C3.75 2.5 2.75 4.29 2.75 6.5V7.5Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
}

export default ReceiptIcon;