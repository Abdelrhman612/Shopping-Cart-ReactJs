import { CartItemProps } from "./interFace";

const cartItem = ({ cartItems }: { cartItems: CartItemProps }) => {
  return (
    <li>
      <img
        src={cartItems.img}
        alt={cartItems.title}
        width="100px"
        height="100px"
      />
      <p>{cartItems.title}</p>
      <p> {Number(cartItems.price).toLocaleString()} جنيه</p>
      <p>
        <span style={{ textDecoration: "line-through" }}>
          {cartItems.insteadOf} جنيه
        </span>
      </p>
    </li>
  );
};

export default cartItem;
