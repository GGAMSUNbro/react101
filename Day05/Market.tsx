import { useState } from "react";

type MarketProps = {
  max: number;
  price?: number;
};
const Market = ({ max, price = 0 }: MarketProps) => {
  const [num, setNum] = useState<number>(1);

  const plus = () => {
    if (num < max) {
      setNum(num === max ? max : num + 1);
    }
  };

  const minus = () => {
    if (num > 0) {
      setNum(num === 1 ? 1 : num - 1);
    }
  };

  return (
    <>
      <button onClick={minus}>-</button>
      <span>{num}</span>
      <button onClick={plus}>+</button>
      <span style={{ color: "gray", fontSize: "5px" }}>최대 {max}개</span>
      <span style={{ color: "red", fontSize: "30px" }}>{price * num}원</span>
    </>
  );
};

export default Market;
