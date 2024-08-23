// 1번 다크모드
// 햇님[화이트모드] <-> 달님[다크모드]
// 브라우저 전체 하얀색 <-> 브라우저 전체 남색

// const changeMode = () => { setIsDarkMode((prev) => !prev)}

import { click } from "@testing-library/user-event/dist/click";
import CheckBox from "./bobby/CheckBox";
import { useState } from "react";

function App() {
  const [isChecked, seIsChecked] = useState<boolean>(false);
  const click = () => seIsChecked((prev) => !prev);

  return (
    <div>
      <CheckBox click={click} isChecked={isChecked} isNecessary />
      <button style={{ backgroundColor: isChecked ? "yellow" : "transparent" }}>
        gd
      </button>
    </div>
  );
}

export default App;
