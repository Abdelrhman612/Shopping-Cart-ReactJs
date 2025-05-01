import CartItem from "./cartItem";
import { CartItemProps } from "./interFace";

const cartItems = ({ cartItems }: { cartItems: CartItemProps[] }) => {
  return (
    <div>
      <h1>Cart {cartItems.length}</h1>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </ul>
    </div>
  );
};

export default cartItems;
