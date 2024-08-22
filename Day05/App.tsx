// Components - Props + State

// html + css => Components
// js [랜더링]  => props
// js[이벤트]   => State

import { useState } from "react";
import Box from "./Box";
import StarbucksButton from "./StarbucksButton";
import TailBox from "./TailBox";
import { randomFill } from "crypto";
import { hover } from "@testing-library/user-event/dist/hover";
import Count from "./Count";
import ChangeBox from "./ChangeBox";
import Market from "./Market";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaBellSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function App() {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isScribe, setIsScribe] = useState<boolean>(false);
  const [isEye, setIsEye] = useState<boolean>(false);
  // Count -10~10 되도록 하는 컴포넌트 만들기
  // Box가 있고, 색깔버튼이 있음(3개 만들기) 누르면 박스색깔 바뀜

  return (
    <>
      <div onClick={() => setIsLike(!isLike)}>
        {isLike ? <CiHeart /> : <FaHeart />}
      </div>
      <div onClick={() => setIsScribe(!isScribe)}>
        {isScribe ? <FaBell /> : <FaBellSlash />}
      </div>
      <div onClick={() => setIsEye(!isEye)}>
        {isEye ? <FaEye /> : <FaEyeSlash />}
      </div>
    </>
  );
}

export default App;
