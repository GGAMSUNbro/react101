// 컴포넌트화 시킴

type BoxProps = {
  backgroundColor: string;
};

const Box = (props: BoxProps) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
};
export default Box;
