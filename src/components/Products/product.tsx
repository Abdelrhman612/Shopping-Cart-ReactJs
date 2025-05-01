import starIcon from "../../assets/icons/icons8-star-48.png";
import toast from "react-hot-toast";
import { InterFaceProducts } from "./interFace";
const product = ({
  product,
  setCartItems,
}: {
  product: InterFaceProducts;
  setCartItems: React.Dispatch<React.SetStateAction<InterFaceProducts[]>>;
}) => {
  const handelClick = (product: InterFaceProducts): void => {
    toast("تم الاضافه الى العربه");
    setCartItems((prev: InterFaceProducts[]): InterFaceProducts[] => {
      return [...prev, product];
    });
  };
  return (
    <li>
      <img src={product.img} alt={product.title} width="100px" height="100px" />

      <p>{product.title}</p>
      <p>
        {product.rate}
        {Array(product.rate)
          .fill(0)
          .map((index) => (
            <img
              key={index}
              src={starIcon}
              alt="star icon"
              width="15px"
              height="15px"
            />
          ))}
      </p>
      <p> {Number(product.price).toLocaleString()} جنيه</p>
      <p>
        <span style={{ textDecoration: "line-through" }}>
          {product.insteadOf} جنيه
        </span>
      </p>
      <button type="button" onClick={() => handelClick(product)}>
        اضف الى العربه
      </button>
    </li>
  );
};

export default product;
