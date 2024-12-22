import React from "react";
import Svg, { G, Path } from "react-native-svg";

function DiscoverIcon({ color = "", size = 25 }) {
  return (
    <>
      <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
        <Path
          d="M12.75 22.5C18.25 22.5 22.75 18 22.75 12.5C22.75 7 18.25 2.5 12.75 2.5C7.25 2.5 2.75 7 2.75 12.5C2.75 18 7.25 22.5 12.75 22.5Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <Path
          d="M14.25 8.5C11.22 8.5 8.75 10.98 8.75 14C8.75 15.37 9.87 16.5 11.25 16.5C14.27 16.5 16.75 14.02 16.75 11C16.75 9.63 15.62 8.5 14.25 8.5Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
}

export default DiscoverIcon;
