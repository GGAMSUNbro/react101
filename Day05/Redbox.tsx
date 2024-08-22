import { CSSProperties } from "react";

const Redbox = () => {
  const boxStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    backgroundColor: "red",
  };
  return <div style={boxStyle}></div>;
};

export default Redbox;
