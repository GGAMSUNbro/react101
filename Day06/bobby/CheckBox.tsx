import { count } from "console";
import { useState } from "react";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
// const changeMode = () => { setIsDarkMode((prev) => !prev)}

type CheckBoxProps = {
  isNecessary?: boolean;
  textHelper?: string;
  isChecked?: boolean;
  click: () => void;
};

const CheckBox = ({
  isNecessary = false,
  textHelper = "No Contents",
  isChecked,
  click,
}: CheckBoxProps) => {
  return (
    <div className="flex items-center gap-1">
      <span onClick={click} style={{ color: "#2c3e50" }}>
        {isChecked ? <FaCheckCircle /> : <FaRegCheckCircle />}
      </span>
      <span style={{ color: isNecessary ? "#EBFF00" : "#2c3e50" }}>
        {isNecessary ? "(필수)" : "(선택)"}
      </span>
      <span style={{ color: "#2c3e50" }}>{textHelper}</span>
    </div>
  );
};

export default CheckBox;
