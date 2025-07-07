import React from "react";
import cursoricon from "../../Assets/cursoricon.png";

function CursorIcon(props) {
  return (
    <img
      src={cursoricon}
      alt="Cursor AI Icon"
      width={props.width || "100"}
      height={props.height || "100"}
      style={{ background: "none" }}
      {...props}
    />
  );
}

export default CursorIcon;
