import { CSSProperties } from "react";

type StarbucksButtonProps = {
  backgroundColor: "mainGreen" | "grey" | "darkGreen";
  hasPlus?: boolean;
};

const StarbucksButton = ({
  backgroundColor,
  hasPlus = false,
}: StarbucksButtonProps) => {
  const bgMap = {
    mainGreen: "#4AA366",
    grey: "#DFE4EC",
    darkGreen: "#1D4D4F",
  };

  const buttonStyle: CSSProperties = {
    border: "none",
    padding: "6px 16px",
    fontSize: "12px",
    fontWeight: "bold",
    width: "330px",
    backgroundColor: bgMap[backgroundColor],
  };
  return <button style={buttonStyle}>{hasPlus && "+"} Button</button>;
};

export default StarbucksButton;
