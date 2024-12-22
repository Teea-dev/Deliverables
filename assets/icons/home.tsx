import React from "react";
import Svg, { G, Path } from "react-native-svg";

function HomeIcon({ color = "", size = 25 }) {
  return (
    <>
      <Svg width={size} height={size - 1} viewBox="0 0 24 25" fill="none">
        <Path
          d="M9.02 3.33992L3.63 7.53992C2.73 8.23992 2 9.72992 2 10.8599V18.2699C2 20.5899 3.89 22.4899 6.21 22.4899H17.79C20.11 22.4899 22 20.5899 22 18.2799V10.9999C22 9.78992 21.19 8.23992 20.2 7.54992L14.02 3.21992C12.62 2.23992 10.37 2.28992 9.02 3.33992Z"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12 18.49V15.49"
          stroke="#292D32"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </>
  );
}

export default HomeIcon;
