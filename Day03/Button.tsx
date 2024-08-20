import { CSSProperties } from "react";

type ButtonProps = {
  borderRadius: "Hard" | "Smooth" | "Circle";
  backgroundColor: "Primary" | "Hover" | "Secondary" | "Deactive";
};

const Button = ({ borderRadius, backgroundColor }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    padding: "10px 45px",
    fontSize: "32px",
    color: "white",
  };

  return (
    <div>
      <span
        style={{
          width: "100px",
          height: "100px",
          border: props[MagicBoxBorder].border,
          borderRadius: props[MagicBoxborderRadius].borderRadius,
          backgroundColor: props.backgroundColor,
          color: props.color,
        }}
      ></span>
    </div>
  );
};

export default MagicBox;
