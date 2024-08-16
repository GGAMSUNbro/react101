import Greenbox from "./Greenbox";
import Yellowbox from "./Yellowbox";
import Redbox from "./Redbox";

function App() {
  return (
    // grid 모양으로 5줄로 그린박스,노랑박스,빨간박스 1000개
    <div
      className="App"
      style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}
    >
      {Array(1000)
        .fill("")
        .map((v, i) => {
          if (i % 3 == 0) return <Greenbox />;
          else if (i % 3 == 1) return <Yellowbox />;
          else return <Redbox />;
        })}
    </div>
  );
}

export default App;
