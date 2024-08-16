import { CSSProperties } from "react";

const Greenbox = () => {
  const boxStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
  };
  return <div style={boxStyle}></div>;
};

export default Greenbox;
