import OnSale from "./OnSale";
import SoldOut from "./SoldOut";

export type TwayPriceProps = {
  currency: "KRW";
  price: number;
  seats: number;
};

const TwayPrice = (props: TwayPriceProps) => {
  const isOnSale = !!props.seats;

  return (
    <div
      style={{
        width: "220px",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        border: "1px solid #e0e0e0",
      }}
    >
      {isOnSale ? <OnSale {...props} /> : <SoldOut />}
    </div>
  );
};

export default TwayPrice;
