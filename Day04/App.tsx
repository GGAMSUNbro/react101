// Components - Props + State

// html + css => Components
// js [랜더링]  => props
// js[이벤트]   => State

import { useState } from "react";
import Box from "./Box";
import StarbucksButton from "./StarbucksButton";
import TailBox from "./TailBox";

function App() {
  // const [스타트값변수,변수를 바꿔주는 함수] = useState (스타트값)
  const [num, setNum] = useState(1);
  const [color, setColor] = useState("black");
  const plusNum = () => {
    setNum(num + 1);
  };
  const minusNum = () => {
    setNum(num - 1);
  };
  // 더하기 버튼과 빼기 버튼 만들고
  // 10이상 숫자가 빨간색
  // -9~9   숫자가 검은색
  // -10이하 숫자가 파랑색

  return (
    <div>
      <button onClick={minusNum}>-</button>
      <span>{num}</span> <button onClick={plusNum}>+</button>
    </div>
  );
}

export default App;
