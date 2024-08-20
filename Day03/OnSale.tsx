export type OnSaleProps = {
  currency: "KRW";
  price: number;
  seats: number;
};

const OnSale = ({ currency, price, seats }: OnSaleProps) => {
  return (
    <div>
      <span style={{ fontSize: "24px", color: "#1a1a1a" }}>{currency}</span>
      <span style={{ fontSize: "24px", color: "#1a1a1a" }}>
        {price.toLocaleString()}
      </span>
      <span style={{ fontSize: "16px", color: "red" }}>{seats}석</span>
    </div>
  );
};

export default OnSale;
