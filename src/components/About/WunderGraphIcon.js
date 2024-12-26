import React from "react";
import wundergraphicon from "../../Assets/wundergraphicon.png";

function WunderGraphIcon(props) {
  return (
    <img
      src={wundergraphicon}
      alt="WunderGraph Icon"
      width={props.width || "100"} // Increased default width
      height={props.height || "100"} // Increased default height
      {...props}
    />
  );
}

export default WunderGraphIcon;
